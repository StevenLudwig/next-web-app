import Head from 'next/head';
import { Grid } from 'react-bootstrap';


export default ({ children }) => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />

			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
		</Head>
		header

		<Grid>
			{ children }
		</Grid>

		footer
	</div>
);