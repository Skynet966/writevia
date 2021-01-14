import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import styled from 'styled-components';
import DashboardTopNavbar from '../../components/dashboard-top-navbar/dashboard-top-navbar.component';
import SideNavbar from '../../components/side-navbar/side-navbar.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

export const DashboardLayoutContainer = styled.div`
	background: grey;
`;

const DashboardLayout = ({ user }) => {
	return user ? (
		<DashboardLayoutContainer>
			<DashboardTopNavbar />
			<SideNavbar />
		</DashboardLayoutContainer>
	) : (
		<Redirect to='/' />
	);
};

const mapStateToProps = createStructuredSelector({
	user: selectCurrentUser
});
export default connect(mapStateToProps)(DashboardLayout);
