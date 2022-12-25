import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import Image from 'next/image';

const ImageList: React.FC<{ images: string[] }> = ({ images }) => {
	return (
		<div className="flex flex-wrap justify-center">
			{images?.map((image, index) => (
				<Image
					className="p-2 border-2 border-black m-2 aspect-square"
					key={index}
					src={`/images/${image}`}
					alt={image}
					width={200}
					height={200}
				/>
			))}
		</div>
	);
};

export default ImageList;
