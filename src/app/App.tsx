import {MyContextProvider} from './MyContext';
import Inputs from './Inputs';
import TextBlue from './TextBlue';
import TextRed from './TextRed';

// Application root component.
function App() {
	return (
		<MyContextProvider>
			<div>
				<Inputs />
				<hr />
				<TextBlue />
				<TextRed label="City" />
			</div>
		</MyContextProvider>
	);
}

export default App;
