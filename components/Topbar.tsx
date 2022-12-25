import Image from 'next/image';
import logo from '../public/logo.png';

type TopbarProps = {
	style?: string;
};
export const Topbar = ({ style, ...props }: TopbarProps) => {
	return (
		<div
			className={`flex flex-1 bg-primary py-4 text-lg text-bold text-black-200 items-center ${style}`}
			{...props}
		>
			<Image
				className="pl-2"
				src={logo}
				alt="logo"
				width="40"
				height="100"
			/>
			<div className="flex flex-1 flex-row justify-around ">
				<div className="align-middle">
					<a href="#">Gallery</a>
				</div>
				<div>
					<a href="#">Home</a>
				</div>
				<div>
					<a href="#">Contact</a>
				</div>
			</div>
		</div>
	);
};
