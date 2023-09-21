'use client'
import { Nav } from "@/components/nav"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function Startup() {

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        }
    ];

    return (
        <>
            <Nav />
            <div className="p-8 mt-4">
                <div className="text-4xl font-black text-center">
                    Raguie
                </div>
                <div className="text-3xl font-medium text-center">
                    Use AI to analyze stock data and make better investment decisions
                </div>
            </div>

            <div className="grid place-items-center p-4">
                <ImageList sx={{ width: 500, height: 450 }} cols={3} className="w-1/2 h-auto">
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    );
}