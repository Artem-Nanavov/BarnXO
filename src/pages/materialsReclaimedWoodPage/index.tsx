/* eslint-disable max-len */
import Footer from 'library/common/components/footer';
import Header from 'library/common/components/header';
import Reviews from 'library/common/components/reviews';
import image59 from 'resources/images/image59.png';
import React from 'react';
import globalStyles from 'resources/styles/globalStyles.scss';
import styles from './styles.scss';

const MaterialsReclaimedWoodPage = () => (
	<>
		<Header />

		<nav className={styles.wood}>
			<div className={styles.wood__wrap}>
				<div style={{maxWidth: '770px'}} className={globalStyles.title}>
					<h1>Authentic Reclaimed Wood Furniture</h1>

					<div />
				</div>

				<img src={image59} alt="" />

				<h3>What Is Reclaimed Wood?</h3>

				<p style={{margin: '16px 0', marginTop: '30px'}}>Reclaimed Wood or Lumber has a past and has been used for buildings and structures from the 18th to the early 20th century. The wood is recycled and reused to meet today’s ever-growing need for sustainable and eco-friendly homes and businesses.</p>
				<p style={{margin: '16px 0'}}>Today’s century-old reclaimed wood emerges from a time when wood was in abundance, both in North America and Europe, and was used as a principal building material.</p>
				<p style={{margin: '16px 0'}}>As the industrial revolution took hold sawmills were often the core of many towns, providing employment and a plentiful supply of wood.</p>
				<p style={{margin: '16px 0'}}>The majority of the recycled flooring, wall paneling, and furniture you see in homes, offices, bars, and restaurants, comes from the factories, warehouses, mills and railways of the mid-west.</p>
				<p style={{margin: '16px 0'}}>In recent years we’ve come to learn to protect our world and there is less wood available for construction, so we’ve looked to the ecological equivalent to newly harvested wood – reclaimed wood.</p>
				<p style={{margin: '16px 0'}}>Reclaimed wood is a stylish and popular choice to decorate and enhance commercial premises and modern homes.</p>
				<p style={{margin: '16px 0'}}>Wood over 100 years old is particularly suitable for high-traffic areas, due its tight grain, which makes it resistant and hard-wearing.</p>

				<h3>Why Use Reclaimed Wood For Our Furniture?</h3>

				<p style={{margin: '0', marginTop: '30px', marginBottom: '16px'}}><code>Reclaimed Lumber is Inherently Eco Friendly</code></p>
				<p style={{margin: '0'}}>The Leadership in Energy and Environmental Design (LEED) Green Building Rating System is the US Green Building Council’s (USGBC) benchmark for designing, building and operating green buildings. To be certified, projects must first meet the prerequisites designated by the USGBC and then earn a certain number of credits within six categories: sustainable sites, water efficiency, energy and atmosphere, materials and resources, indoor environmental quality, innovation and design process.</p>
				<p style={{margin: '16px 0'}}><code>Reclaimed lumber is LEED certified</code></p>
				<p style={{margin: '0'}}>Using reclaimed wood can earn credits towards achieving LEED project certification. Because reclaimed wood is considered recycled content, it meets the ‘materials and resources’ criteria for LEED certification, and because some reclaimed lumber products are Forest Stewardship Council (FSC) certified, they can qualify for LEED credits under the ‘certified wood’ category.</p>
				<p style={{margin: '16px 0'}}><code>Reclaimed Lumber is Stronger and More Durable</code></p>
				<p style={{margin: '0'}}>Another reason consumers and designers alike choose reclaimed lumber is its unique appearance and its strength, stability and durability. Many experts believe the relatively increased strength of reclaimed lumber is due to the lack of air pollution that existed up until the 20th century.</p>
				<p style={{margin: '13px 0'}}>Another reason reclaimed lumber is stronger than boards cut now is the fact that these trees were often harvested from virgin forests that had hundreds or even thousands of years of slow growth without human intervention.</p>
				<p style={{margin: '0'}}>Wood naturally expands and contracts through the year as the moisture content and temperature of the air changes. Newly sawn lumber does this inherently more than lumber that has been reclaimed. Reclaimed lumber has been through this expansion and contraction hundreds of time in many cases rendering the wood more stable than new lumber.</p>

				<h3>Types Of Reclaimed Wood</h3>

				<p>We offer Reclaimed Douglas Fir, which is our most commonly used wood. In addition we offer Reclaimed White Oak, and Reclaimed Walnut at special request.</p>
			</div>
		</nav>

		<Reviews />

		<Footer />
	</>
);

export default MaterialsReclaimedWoodPage;
