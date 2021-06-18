import Select from 'library/common/components/ui/select';
import React from 'react';
import cn from 'classnames';
import addSpaceBetweenNum from 'library/utils/addSpaceBetweenNum';
import Rectangle10092 from 'resources/images/Rectangle10092.png';
import Rectangle10093 from 'resources/images/Rectangle10093.png';
import Rectangle10094 from 'resources/images/Rectangle10094.png';
import Rectangle10095 from 'resources/images/Rectangle10095.png';
import Rectangle10096 from 'resources/images/Rectangle10096.png';
import Rectangle10097 from 'resources/images/Rectangle10097.png';
import Rectangle10098 from 'resources/images/Rectangle10098.png';
import NumberInput from 'library/common/components/ui/numberInput';
import Button from 'library/common/components/ui/button';
import Like from 'resources/icons/like';
import Libra from 'resources/icons/libra';
import Share from 'resources/icons/share';
import styles from './styles.scss';

const valuesOfSelect = [
	{
		key: '14rf13',
		value: '60”L X 30”W',
	},
	{
		key: 'sdfsdf',
		value: '40”L X 20”W',
	},
	{
		key: '14rf1435tqrgw13',
		value: '20”L X 10”W',
	},
];

const valuesOfSelect2 = [
	{
		key: '235246ygf3q',
		value: '2,5"',
	},
	{
		key: '2qqwf2f2',
		value: '1,5"',
	},
	{
		key: 'sadfasg254geqg2',
		value: '0,5"',
	},
];

const woods = [
	Rectangle10092,
	Rectangle10093,
	Rectangle10094,
	Rectangle10095,
	Rectangle10096,
	Rectangle10097,
	Rectangle10098,
	Rectangle10097,
	Rectangle10098,
];

interface IForm {
	price: string | number;
}

const Form = ({
	price,
}: IForm) => {
	const [dimensions, setDimensions] = React.useState(valuesOfSelect[0]);
	const [thickness, setThickness] = React.useState(valuesOfSelect2[0]);
	const [selectedWood, setSelectedWood] = React.useState(woods[0]);
	const [count, setCount] = React.useState<number | string>(0);

	return (
		<form action="#" className={styles.form}>
			<div className={styles.form__info}>
				<div className={styles.form__block}>
					<div className={styles.form__block_item}>
						<h3>Dimensions</h3>

						<Select
							onClick={setDimensions}
							value={dimensions}
							placeholder=""
							values={valuesOfSelect}
						/>
					</div>

					<div className={styles.form__block_item}>
						<h3>THICKNESS</h3>

						<Select
							onClick={setThickness}
							value={thickness}
							placeholder=""
							values={valuesOfSelect2}
						/>
					</div>
				</div>

				<div className={styles.form__block_item}>
					<h3>Wood And finish</h3>

					<div className={styles.form__woods}>
						{
							woods.map((wood) => (
								<div
									onClick={() => setSelectedWood(wood)}
									key={Math.random()}
									className={cn(styles.form__wood, wood === selectedWood ? styles.form__wood_selected : '')}
								>
									<img src={wood} alt="" />
								</div>
							))
						}
					</div>
				</div>

				<div className={styles.form__block_item}>
					<h3>Metal finish</h3>

					<Select
						onClick={setDimensions}
						value={dimensions}
						placeholder=""
						values={valuesOfSelect}
					/>
				</div>
			</div>

			<div className={styles.form__actions}>
				<p className={styles.form__price}>
					$
					{addSpaceBetweenNum(price)}
				</p>

				<div className={styles.form__actions_actions}>
					<div className={styles.form__btns}>
						<NumberInput value={count} setValue={setCount} />

						<Button
							text="ADD TO CARD"
							onClick={() => { }}
						/>
					</div>

					<div className={styles.form__icons}>
						<Like />
						<Libra />
						<Share />
					</div>
				</div>
			</div>
		</form>
	);
};

export default Form;
