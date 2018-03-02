import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.h1`
	font-weight: 600;
	font-size: 18px;
`;

const Wrapper = styled.div`
	padding-left: 100px;
	text-align: left;
`;

const Underline = styled.span`
	text-decoration: underline;
`;

class Party extends Component {
	render() {
		return (
			<Wrapper>
				<Header>Where</Header>
				<ul>
					<li>
						Place:
						<a href="https://www.lutsen.com/">
							Summit Chalet at Lutsen Mountains
						</a>
					</li>
					<li>Address: 455 Ski Hill Road, Lutsen, MN 55612</li>
					<li>Phone: 218-406-1377</li>
				</ul>

				<Header>Schedule</Header>
				<ul>
					<li>3:30pm - Pictures at the Summit of Moose Mountain</li>
					<li>
						4:15pm - Begin boarding gondola for the ride up the
						mountain
					</li>
					<li>
						5:00pm - Outdoor ceremony overlooking Lake Superior (or
						indoors in the event of rain)
					</li>
					<li>
						5:30pm - Reception in Summit Chalet and indoor/outdoor
						festivities & merriment
					</li>
					<li>
						4:15pm - Begin boarding gondola for the ride down the
						mountain
					</li>
					<li>11:00pm - After party at Papa Charlie's</li>
				</ul>

				<Header>What to wear</Header>
				<ul>
					<li>Casual</li>
					<li>
						<Underline>NO HEELS</Underline> while on the mountain -
						we will be on a deck floor with gaps wide enough for
						some heels to fall through.
					</li>
				</ul>

				<Header>Reservations</Header>
				<p>
					We have a block of rooms reserved for the weekend. Call
					___-___-____ to reserve your room (minimum of 2 nights). Do
					not book online. See ________ for a list of room options.
				</p>
			</Wrapper>
		);
	}
}

export default Party;
