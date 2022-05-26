import React from 'react';
import {AppButton} from '../src/components/AppButtonComponent';

const Logout = props => {
  return (
		<AppContainer>
			<AppInput
				label="SAIR"
				type="text"
			/>
			<AppButton title="Sair" />
		</AppContainer>
	);
};

export default Logout;