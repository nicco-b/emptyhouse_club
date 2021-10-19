import { FQBlock, FHeader, ATitle, SocialBox, SocialGrid, SocialImg } from './page.styled'

export const Artist = ({ artist }) => {
	const { firstName, lastName, socialLinks, quote, description, artistPhoto } = artist

	return (
		<FQBlock gap={'1em'}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<ATitle>{`${firstName} ${lastName}`}</ATitle>
				<div style={{ alignContent: 'end', display: 'flex', justifyContent: 'center' }}>
					<img style={{ width: '50%' }} src={artistPhoto.url} alt={firstName} />
				</div>
			</div>
			<FHeader>{quote}</FHeader>
			{description}
			<SocialBox>
				<SocialGrid>
					<a href={`${socialLinks.instagram}`}>
						<SocialImg src='/instagram_outline.png' alt='alt' />
					</a>
					<a href={`${socialLinks.email}`}>
						<SocialImg src='/email_outline.png' alt='alt' />
					</a>
					<a href={`${socialLinks.twitter}`}>
						<SocialImg src='/twitter_outline.png' alt='alt' />
					</a>
					<a href={`${socialLinks.website}`}>
						<SocialImg src='/webiste.png' alt='alt' />
					</a>
				</SocialGrid>
			</SocialBox>
		</FQBlock>
	)
}
