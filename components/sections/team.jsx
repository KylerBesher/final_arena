import Image from 'next/image';
import { sectionStyles, getBackgroundStyle } from '../../lib/styles';

const IMAGE_SIZE = 192; // 48rem = 192px

export function Team({
    title,
    description,
    items = [],
    background = 'transparent',
    customBackground,
    padding = 'default',
    width = 'default',
}) {
    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark =
        background === 'dark' ||
        (background === 'custom' && customBackground?.toLowerCase() < '#888888');

    return (
        <section className={`${bgStyle} ${sectionStyles.paddings[padding]}`}>
            <div className={sectionStyles.widths[width]}>
                {title && (
                    <h2
                        className={`text-3xl font-bold text-center mb-6 ${isDark ? 'text-white' : ''}`}
                    >
                        {title}
                    </h2>
                )}
                {description && (
                    <p
                        className={`text-xl text-center mb-12 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        {description}
                    </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items?.map((member, index) => (
                        <div key={index} className="text-center">
                            <div className="relative mx-auto mb-4 aspect-square w-48">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={IMAGE_SIZE}
                                    height={IMAGE_SIZE}
                                    className="rounded-full object-cover"
                                    priority={index < 2}
                                />
                            </div>
                            <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : ''}`}>
                                {member.name}
                            </h3>
                            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {member.role}
                            </p>
                            <p className={isDark ? 'text-gray-400' : 'text-gray-700'}>
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
