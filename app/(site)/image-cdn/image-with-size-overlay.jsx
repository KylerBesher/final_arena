'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { getResourceSize } from 'utils';
import Image from 'next/image';

export function ImageWithSizeOverlay({ src, srcSet, sizes, overlayPosition }) {
    const imageRef = useRef();
    const [imgSize, setImgSize] = useState(undefined);

    const handleImageLoad = useCallback(() => {
        const imgElement = imageRef.current;
        if (imgElement?.complete) {
            const size = getResourceSize(imgElement?.currentSrc);
            setImgSize(size);
        } else {
            setImgSize(undefined);
        }
    }, []);

    useEffect(() => {
        handleImageLoad();
    }, [handleImageLoad]);

    return (
        <div className="relative">
            {imgSize && (
                <span
                    className={`absolute py-1.5 px-2.5 text-sm rounded-lg bg-neutral-900/70 top-2.5 ${
                        overlayPosition === 'right' ? 'right-2.5' : 'left-2.5'
                    }`}
                >{`Size: ${Math.ceil(imgSize / 1024)}KB`}</span>
            )}

            <Image
                src={src}
                alt="Corgi"
                width={500}
                height={300}
                sizes={sizes}
                srcSet={srcSet}
                onLoad={handleImageLoad}
                ref={imageRef}
            />
        </div>
    );
}
