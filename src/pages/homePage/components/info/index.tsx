/* eslint-disable max-len */
import React from 'react';
import Rectangle1097 from 'resources/images/Rectangle1097.png';
import Rectangle1098 from 'resources/images/Rectangle1098.png';
import Rectangle1099 from 'resources/images/Rectangle1099.png';
import globalStyles from 'resources/styles/globalStyles.scss';
import Post from './components/post';
import styles from './styles.scss';

const Info = () => (
	<div style={{marginTop: '120px'}}>
		<div style={{maxWidth: '474px'}} className={globalStyles.title}>
			<h1>The BARN XO Difference</h1>

			<div />
		</div>

		<div className={styles.info}>
			<Post
				title="Header first"
				subTitle="Each piece of our furniture we handcraft is made to order with great attention to detail."
				img={Rectangle1097}
			/>

			<Post
				title="Header second"
				subTitle="We want to make sure you are completely satisfied with your selections and we want our products to remain in your family or business for years to come."
				img={Rectangle1098}
			/>

			<Post
				title="Header third"
				subTitle="We take pride in every piece in our shop and we build them as if we were building it for ourselves. We set very high standards before our product is shipped."
				img={Rectangle1099}
			/>
		</div>
	</div>
);

export default Info;
