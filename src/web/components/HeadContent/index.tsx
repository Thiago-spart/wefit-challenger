import { SITE } from "src/config/site";

export const HeadContent: React.FC = () => (
	<>
		<meta
			name="keywords"
			content="fotografo profissional portfolio ensaios eventos casamentos albums retrato foto familia"
		/>
		<meta name="robots" content="index,follow" />
		<meta
			name="description"
			content="Portfolio official do quase_fotos | ensaios & eventos"
		/>
		<meta
			name="og:description"
			content="Portfolio official do quase_fotos | ensaios & eventos"
		/>
		<meta
			name="og:image"
			content="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content="ForecastThi" />
		<meta
			name="twitter:description"
			content="Portfolio official do quase_fotos | ensaios & eventos"
		/>
		<meta
			name="twitter:image"
			content="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		/>
		<meta name="og:site_name" content={SITE.name} />
		<meta name="og:url" content={SITE.url} />
		<meta name="og:locale" content="pt_BR" />
		<link rel="cannonical" href={SITE.url} />
	</>
);
