import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "../components/Card/Card.jsx";

const Underline = styled.span`
	text-decoration: underline;
`;

class Party extends Component {
	render() {
		return (
			<div className="content">
				<Grid fluid>
					<Row>
						<Col xs={12}>
							<Card
								title="Where"
								content={
									<React.Fragment>
										<ul>
											<li>
												Place: &nbsp;
												<a href="https://www.lutsen.com/">
													Summit Chalet at Lutsen
													Mountains
												</a>
											</li>
											<li>
												Address: 455 Ski Hill Road,
												Lutsen, MN 55612
											</li>
											<li>Phone: 218-406-1377</li>
										</ul>
									</React.Fragment>
								}
							/>
							<Card
								title="Schedule"
								content={
									<React.Fragment>
										<ul>
											<li>
												3:30pm - Pictures at the Summit
												of Moose Mountain
											</li>
											<li>
												4:15pm - Begin boarding gondola
												for the ride up the mountain
											</li>
											<li>
												5:00pm - Outdoor ceremony
												overlooking Lake Superior (or
												indoors in the event of rain)
											</li>
											<li>
												5:30pm - Reception in Summit
												Chalet and indoor/outdoor
												festivities & merriment
											</li>
											<li>
												4:15pm - Begin boarding gondola
												for the ride down the mountain
											</li>
											<li>
												11:00pm - After party at Papa
												Charlie's
											</li>
										</ul>
									</React.Fragment>
								}
							/>
							<Card
								title="What to wear"
								content={
									<React.Fragment>
										<ul>
											<li>Casual</li>
											<li>
												<Underline>NO HEELS</Underline>{" "}
												while on the mountain - we will
												be on a deck floor with gaps
												wide enough for some heels to
												fall through.
											</li>
										</ul>
									</React.Fragment>
								}
							/>
							<Card
								title="Reservations"
								content={
									<React.Fragment>
										<p>
											We have a block of rooms reserved
											for the weekend. Call ___-___-____
											to reserve your room (minimum of 2
											nights). Do not book online. See
											________ for a list of room options.
										</p>
									</React.Fragment>
								}
							/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Party;
