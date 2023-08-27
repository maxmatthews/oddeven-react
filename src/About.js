const About = ({ isEven }) => (
	<>
		<h2 style={{ fontSize: 20, marginTop: 50, marginBottom: 10 }}>About</h2>
		<div className="oddeven-about">
			<p className="oddeven-paragraph">
				A simple website to help you better understand which side of the street
				to be parked on in Syracuse, NY. The{" "}
				<a href="http://www.syrgov.net/">city of Syracuse</a> uses odd even
				parking, or{" "}
				<a href="https://en.wikipedia.org/wiki/Alternate-side_parking">
					alternative-side parking
				</a>
				, to make sure snowplows and street-sweepers have access on narrow
				roads.
			</p>
			<p className="oddeven-paragraph">
				<span id="parking-info-side">{isEven ? "Even" : "Odd"}</span> side
				parking means you should be on the side of the street with addresses
				like{" "}
				<span id="parking-info-address">
					{isEven ? "1024, 312, or 658" : "1024, 312, or 658"}
				</span>
				. For more information, visit{" "}
				<a href="http://www.syrgov.net/Parking_FAQs.aspx">
					Syracuse's Parking FAQ
				</a>
				.
			</p>
			<footer className="oddeven-footer">
				<p className="oddeven-paragraph">
					This website is unofficial and not related in any manner to the city
					government of Syracuse, NY. If you find something wrong or have a
					suggestion, email{" "}
					<a href="mailto:info@oddeven.org">info@oddeven.org</a> or do a pull
					request on{" "}
					<a href="https://github.com/philipbordallo/oddeven">GitHub</a>.
				</p>
			</footer>
		</div>
	</>
);

export default About;
