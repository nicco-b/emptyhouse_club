import styled from 'styled-components'

const FHeader = styled.div`
	display: grid;
	font-weight: 900;
	font-size: 1rem;
`
const FQGrid = styled.div`
	display: grid;
	gap: 1em;
	max-width: 400px;
`
const FQBlock = styled.div`
	display: grid;
	> div {
		font-size: 0.9rem;
	}
`
const FQMiddle = styled.div`
	display: grid;
	justify-content: center;
	padding-top: 2em;
`
export const FaqPage = () => {
	return (
		<FQMiddle>
			<FQGrid>
				<FQBlock>
					<FHeader>Where is the store based?</FHeader>
					LA (United States)
				</FQBlock>
				<FQBlock>
					<FHeader>Do you ship internationally?</FHeader> We currently only offer domestic shipping{' '}
				</FQBlock>

				<FQBlock>
					<FHeader>When will my order be sent out?</FHeader> All orders will be shipped out within 3
					business days since they are all made to order. You should be receiving an email when it is
					shipped out!
				</FQBlock>

				<FQBlock>
					<FHeader>When will my order arrive?</FHeader> Domestic orders should arrive 3-5 business days
					after receiving your shipping notification email.{' '}
				</FQBlock>

				<FQBlock>
					<FHeader>Can I change my shipping address after I placed an order?</FHeader> Please email
					emptyhouseclub@gmail.com as soon as possible. If we have already shipped it out, we will not be
					able to change the address.{' '}
				</FQBlock>

				<FQBlock>
					<FHeader>Tracking number says my package was delivered, but I never received it!</FHeader> This
					shop is not responsible for any package(s) that may have been lost in transit. Please contact
					your local post office.
				</FQBlock>

				<FQBlock>
					<FHeader> What if something is wrong with my order? (Return, Refunds, & Exchanges)</FHeader>
					Items are only eligible for refunds if they were delivered damaged. Please contact me using the
					contact form on this site or email me at emptyhouseclub@gmail.com. (The return policy lasts 30
					days. If 30 days have passed since the day the item(s) have been shipped out, I can't offer a
					return, refund, or exchange.)
				</FQBlock>
			</FQGrid>
		</FQMiddle>
	)
}
