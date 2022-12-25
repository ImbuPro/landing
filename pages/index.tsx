import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import ImageList from './_gallery';
import Head from 'next/head';
import { Topbar } from '../components/Topbar';
import { Input, TextArea } from '../components/Input';

const Home: React.FC<{ images: string[] }> = ({ images }) => {
	return (
		<>
			<Head>
				<title>My Landing Page</title>
			</Head>
			<div className="text-black space-y-4">
				<Topbar style="text-white" />
				<div className="flex flex-col flex-1 p-4 text-center">
					<h1 className="text-2xl text-bold mb-4">Who am I ?</h1>
					<p className="flex-1 px-20">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequatur velit ut qui necessitatibus provident et,
						voluptatum maxime quis, recusandae, alias dolores est
						quibusdam explicabo repudiandae. Totam ipsa accusamus quod a.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum, amet excepturi. Facilis architecto porro minima odit.
						Aut, esse! Nam esse nihil reprehenderit quos ipsum dignissimos
						repudiandae a natus quibusdam sunt.
					</p>
				</div>
				<div className="flex flex-col flex-1 p-4 text-center">
					<h1 className="text-2xl text-bold mb-4">Gallery</h1>
					<ImageList images={images} />
				</div>
				<div className="flex flex-col flex-1 p-4 text-left border-2 border-gray-300 mx-10 text-gray-500 space-y-6">
					<h1 className="text-2xl text-bold mb-4">Contact</h1>
					<p className="text-xl">Vous souhaitez me contacter ?</p>
					<Input name="name" isRequired>
						Votre nom (obligatoire)
					</Input>
					<Input name="email" isRequired>
						Votre e-mail (obligatoire)
					</Input>
					<TextArea name="message">Message</TextArea>
				</div>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const images = fs.readdirSync(path.join(process.cwd(), 'public/images'));
	return {
		props: {
			images,
		},
	};
};

export default Home;
