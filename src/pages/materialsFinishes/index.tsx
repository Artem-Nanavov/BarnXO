/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import React from 'react';
import cn from 'classnames';
import globalStyles from 'resources/styles/globalStyles.scss';
import Rectangle10092 from 'resources/images/Rectangle10092.png';
import Rectangle10093 from 'resources/images/Rectangle10093.png';
import Rectangle10094 from 'resources/images/Rectangle10094.png';
import Rectangle10095 from 'resources/images/Rectangle10095.png';
import Rectangle10096 from 'resources/images/Rectangle10096.png';
import Rectangle10097 from 'resources/images/Rectangle10097.png';
import Rectangle10098 from 'resources/images/Rectangle10098.png';
import styles from './styles.scss';

const margin0 = {margin: '0'};
const margin16 = {margin: '16px 0'};
const marginTop16 = {marginTop: '16px', marginBottom: '0'};

const MaterialsFinishes = () => (
	<>
		<Header />

		<nav className={cn(globalStyles.container, styles.finishes)}>
			<div className={globalStyles.wrap}>
				<div style={{maxWidth: '598px'}} className={globalStyles.title}>
					<h1>our reclaimed wood finishes</h1>

					<div />
				</div>

				<div className={styles.finishes__content}>
					<div
						className={styles.finishes__item}
						style={{backgroundImage: `url('${Rectangle10092}')`}}
					>
						<div>
							<h4>Antique Oak</h4>
						</div>
					</div>

					<div
						className={styles.finishes__item}
						style={{backgroundImage: `url('${Rectangle10093}')`}}
					>
						<div>
							<h4>Bees Wax</h4>
						</div>
					</div>

					<div
						className={styles.finishes__item}
						style={{backgroundImage: `url('${Rectangle10094}')`}}
					>
						<div>
							<h4>Custom</h4>
						</div>
					</div>

					<div
						className={styles.finishes__item}
						style={{backgroundImage: `url('${Rectangle10095}')`}}
					>
						<div>
							<h4>Raw-Unprotected</h4>
						</div>
					</div>

					<div
						className={styles.finishes__item}
						style={{backgroundImage: `url('${Rectangle10096}')`}}
					>
						<div>
							<h4>Rough Top</h4>
						</div>
					</div>

					<div
						className={styles.finishes__item}
						style={{backgroundImage: `url('${Rectangle10097}')`}}
					>
						<div>
							<h4>Weathered Grey</h4>
						</div>
					</div>

					<div
						className={styles.finishes__item}
						style={{backgroundImage: `url('${Rectangle10098}')`}}
					>
						<div>
							<h4>White Washed</h4>
						</div>
					</div>
				</div>

				<h3>Green, Non-VOC Eco-Friendly Finishes</h3>

				<p>In everything we do at BARN XO, we make sure to put focus on environmentally friendly manufacturing practices. This includes our finishes and stains.</p>
				<p style={margin16}>Traditional stains typically contain harsh chemicals and have strong odors which can cause headaches and nausea. The result, a natural product filled with harmful chemicals and a process which often leaves a home uninhabitable for days.</p>
				<p style={margin0}>All of our stains are Green, non-voc (or low-voc), eco-friendly finishes. This result is a non-toxic, no odor finish with the same durability and aesthetic of traditional toxic finishes.</p>

				<h3>Why Does This Matter?</h3>

				<p>VOCs: Many paints contain volatile organic compounds (VOCs), which refers to a class of chemicals that evaporate readily at room temperature. When these VOC’s off-gas, a process that can last for weeks depending on the type of paint, they may cause a variety of health problems like nausea; dizziness; irritation of the eyes and respiratory tract; heart, lung, or kidney damage; and even cancer.</p>
				<p style={margin16}>In addition to polluting our indoor air, they can make their way outside to contaminate outdoor air as well.</p>
				<p style={margin0}>Fungicides and biocides: Finishes also contain toxic fungicides to prevent mildew growth, and biocides, which are used as preservatives to extend the full shelf life. Toxic biocides can be detected in the air five years after paint is applied. Like VOCs, fungicides and biocides contaminate both indoor and outdoor air. If paint is not disposed of properly, they can also seep into groundwater.</p>
				<p style={marginTop16}>Pigments: Some of the toxic chemicals in finishes come from the substances used to color them. Instead of chemical pigments, look for paints made with all-natural pigments.</p>

			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default MaterialsFinishes;
