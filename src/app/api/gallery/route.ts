import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const gallery = await prisma.gallery.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(gallery);
    } catch (error) {
        console.error('Error fetching gallery:', error);
        return NextResponse.json(
            { error: 'Failed to fetch gallery' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, image } = body;

        const gallery = await prisma.gallery.create({
            data: {
                title,
                image,
            },
        });

        return NextResponse.json(gallery);
    } catch (error) {
        console.error('Error creating gallery item:', error);
        return NextResponse.json(
            { error: 'Failed to create gallery item' },
            { status: 500 }
        );
    }
}
