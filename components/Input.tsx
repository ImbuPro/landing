import React, { ReactNode } from 'react';

type InputProps = {
	name: string;
	className?: string;
	type?: string;
	children?: ReactNode;
	isRequired?: boolean;
};
type TextAreaProps = {
	name: string;
	className?: string;
	children?: ReactNode;
	isRequired?: boolean;
};

export const Input: React.FC<InputProps> = ({
	children,
	type,
	className,
	isRequired = false,
}) => {
	return (
		<div className={className}>
			<p className="text-bold text-md mb-1">{children}</p>
			<input
				className="border-2 border-gray-300"
				type={type}
				required={isRequired}
			/>
		</div>
	);
};
export const TextArea: React.FC<TextAreaProps> = ({
	children,
	name,
	className,
}) => {
	return (
		<div className={className}>
			<p className="text-bold text-md mb-1">{children}</p>
			<textarea
				className="w-full border-2 border-gray-300 rounded-md"
				name={name}
				id=""
				cols={30}
				rows={10}
				required
			/>
		</div>
	);
};
