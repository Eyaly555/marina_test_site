import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const webhookUrl = process.env.WEBHOOK_URL

    if (!webhookUrl) {
        console.error('WEBHOOK_URL environment variable is not set')
        return res.status(500).json({ error: 'Webhook not configured' })
    }

    // Validate the URL is a flow.zoho.* address
    try {
        const url = new URL(webhookUrl)
        if (!url.hostname.startsWith('flow.zoho.')) {
            console.error('WEBHOOK_URL is not a flow.zoho.* address:', url.hostname)
            return res.status(400).json({ error: 'Invalid webhook URL' })
        }
    } catch {
        console.error('WEBHOOK_URL is not a valid URL')
        return res.status(400).json({ error: 'Invalid webhook URL' })
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        })

        if (!response.ok) {
            console.error('Zoho webhook responded with status:', response.status)
            return res.status(502).json({ error: 'Webhook request failed' })
        }

        return res.status(200).json({ success: true })
    } catch (err) {
        console.error('Failed to forward request to Zoho:', err)
        return res.status(502).json({ error: 'Failed to forward request' })
    }
}
