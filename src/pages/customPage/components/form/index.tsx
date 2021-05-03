import Button from 'library/common/components/ui/button';
import React from 'react';
import {useDropzone} from 'react-dropzone';
import Input from '../input';
import Textarea from '../textarea';
import styles from './styles.scss';

const Form = () => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [like, setLike] = React.useState('');
	const [dimensions, setDimensions] = React.useState('');
	const [tellAboutUs, setTellAboutUs] = React.useState('');
	// const [selectedFiles, setSelectedFiles] = React.useState<any>(undefined);

	const {getRootProps, getInputProps} = useDropzone({multiple: true});

	// const handleFilesInput = React.useCallback((files: FileList | null) => {
	// 	console.log('files', files);
	// 	// setSelectedFiles(files);
	// }, []);

	return (
		<form className={styles.form}>
			<div className={styles.form__content}>
				<Input
					value={firstName}
					onChange={setFirstName}
					placeholder="Enter your name"
				/>

				<Input
					value={lastName}
					onChange={setLastName}
					placeholder="Enter your last name"
				/>

				<Input
					value={phone}
					onChange={setPhone}
					placeholder="Your phone number"
				/>

				<Input
					value={email}
					onChange={setEmail}
					placeholder="Your email address"
				/>

				<Input
					value={like}
					onChange={setLike}
					placeholder="What would you like?"
				/>

				<Input
					value={dimensions}
					onChange={setDimensions}
					placeholder="Dimensions"
				/>

				<Textarea
					rows="4"
					placeholder="Tell Us About It"
					onChange={setTellAboutUs}
					value={tellAboutUs}
				/>

				<section className={styles.form__imageUploader}>
					<div {...getRootProps({className: 'dropzone'})}>
						<input {...getInputProps()} />
						<p>
							<code>Download image</code>
							{' '}
							or drag & drop here
						</p>
					</div>
				</section>
			</div>

			<Button
				style={{width: '300px', height: '60px', marginTop: '60px'}}
				text="SEND"
				onClick={() => {}}
			/>
		</form>
	);
};

export default Form;
