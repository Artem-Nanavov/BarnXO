import React from 'react';
import Rectangle1092 from 'resources/images/Rectangle1092.png';
import Rectangle1093 from 'resources/images/Rectangle1093.png';
import Rectangle1094 from 'resources/images/Rectangle1094.png';
import Example from './components/example';
import styles from './styles.scss';

const Examples = () => (
	<div className={styles.examples}>
		<Example title="Commercial" img={Rectangle1092} />
		<Example title="Residential" img={Rectangle1093} />
		<Example title="Custom" img={Rectangle1094} />
	</div>
);

export default Examples;
