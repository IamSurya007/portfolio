import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest, { params }: { params: Promise<{ size: string }> }) {
  const resolvedParams = await params;
  const sizeParam = resolvedParams.size || '192';
  const size = parseInt(sizeParam, 10);
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#171717',
          borderRadius: '20%',
          color: '#ffffff',
          fontSize: Math.floor(size * 0.65),
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
        }}
      >
        S
      </div>
    ),
    {
      width: size,
      height: size,
    }
  );
}
