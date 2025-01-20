export interface GalleryItem {
    id: string;
    imageUrl: string;
    description: string;
}

export interface GalleryProps {
    items: GalleryItem[];
}