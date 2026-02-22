import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

// Use nodejs runtime to allow fs access
export const runtime = 'nodejs'

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
    // Read the image from the filesystem
    const imagePath = path.join(process.cwd(), 'public', 'profile.png')
    const imageData = fs.readFileSync(imagePath)
    const base64Image = imageData.toString('base64')

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                }}
            >
                <img
                    src={`data:image/png;base64,${base64Image}`}
                    width="32"
                    height="32"
                    style={{
                        objectFit: 'cover',
                        borderRadius: '50%',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
