import {nanoid} from 'nanoid';
import {useState} from 'react';

import {StyledDoneLabel} from './styled/StyledDoneLabel';
import {StyledForm} from './styled/StyledForm';
import {StyledInput} from './styled/StyledInput';
import {StlyedList} from './styled/StyledList';
import {StyledListItems} from './styled/StyledListItems';
import {StyledWidthBox} from './styled/StyledWidthBox';

//Dummy Data - will be replaced with Data from the API
const App = () => {
	const [calories, setCalories] = useState(0);
	const [value, setValue] = useState('');
	const [foods, setFoods] = useState([
		{
			id: nanoid(),
			value: 'Bio-Müsli',
			done: false,
			calories: 660,
		},
		{
			id: nanoid(),
			value: 'Spiegelei',
			done: false,
			calories: 420,
		},
		{
			id: nanoid(),
			value: '1 Banane',
			done: false,
			calories: 90,
		},
		{
			id: nanoid(),
			value: 'Walnüsse',
			done: false,
			calories: 140,
		},
		{
			id: nanoid(),
			value: 'Franzbrötchen',
			done: false,
			calories: 375,
		},
	]);
	return (
		<StyledWidthBox>
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					setFoods([...foods, {id: nanoid(), value, done: false}]);
					setValue('');
				}}
			>
				<StyledDoneLabel>
					What did you eat today?
					<StyledInput
						placeholder="e.g. Eggs and bacon"
						type="text"
						maxLength="40"
						value={value}
						onChange={event => {
							setValue(event.target.value);
						}}
					/>
				</StyledDoneLabel>
				<button type="submit">Add</button>
			</StyledForm>
			<StlyedList>
				{foods.map(food => {
					return (
						<StyledListItems key={food.id}>
							<StyledDoneLabel done={food.done}>
								<input
									type="checkbox"
									checked={food.done}
									onChange={event_ => {
										if (food.done) {
											setCalories(calories - food.calories);
										} else {
											setCalories(calories + food.calories);
										}
										setFoods(
											foods.map(food_ =>
												food_.id === food.id
													? {
															...food_,
															done: event_.target.checked,
													  }
													: food_
											)
										);
									}}
								/>
								{food.value}
							</StyledDoneLabel>
							<button
								type="button"
								onClick={() => {
									if (food.done) {
										setCalories(calories - food.calories);
									}
									setFoods(foods.filter(food_ => food_.id !== food.id));
								}}
							>
								Delete
							</button>
						</StyledListItems>
					);
				})}
			</StlyedList>
			<div>total calories consumed today:{calories}</div>
		</StyledWidthBox>
	);
};

export default App;
