import React from 'react';
import styles from './styles.scss';

interface ITag {
	text: string;
}

const Tag = ({
	text,
}: ITag) => (
	<div className={styles.tag}>
		{text}
	</div>
);

export default Tag;
