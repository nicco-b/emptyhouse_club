import { FQBlock, FQMiddle, FQGrid, FHeader, ATitle, SocialBox, SocialGrid } from './page.styled'

export const AboutPage = () => {
	return (
		<FQMiddle>
			<FQGrid gap={'3em'}>
				<FQBlock gap={'1em'}>
					<ATitle>Empty House Club</ATitle>
					Empty House Club is an artist collective formed in 2021 by artists Ryn Kang, Lun Padungvichean,
					and Harim Choi. We are making products -inspired by images derived from our unconscious mind.
					(subconscious) - inspired by hopes to demolish human civilization - inspired by characters with
					narrative - visualization Currently we are only selling patches, but are planning to branch out
					to other items as well. We really appreciate everyone who stops by! Your support is what lets
					us keep doing what we love :^) Thank you! For work or collab inquires, please email me at
					emptyhouseclub@gmail.com.
				</FQBlock>
				<FQBlock gap={'1em'}>
					<ATitle>Ryn Kang</ATitle>
					<FHeader>“Illustrator based in grassland. Louie is very cute {`${'<'}3`}”</FHeader>
					Yeji Kang is an illustrator and a recent RISD graduate based in Providence, RI. She loves
					working with fun colors and textures to create dreamy images and objects. When not tinkering
					around at her desk, she can be found eating sweet potatoes with honey.
					<SocialBox>
						<SocialGrid>
							<img src='/social/email.png' alt='alt' />
							<img src='/social/twitter.png' alt='alt' />
							<img src='/social/instagram.png' alt='alt' />
						</SocialGrid>
					</SocialBox>
				</FQBlock>
				<FQBlock gap={'1em'}>
					<ATitle>Lun Padungvichean</ATitle>
					<FHeader>“Illustrator based in grassland. Louie is very cute {`${'<'}3`}”</FHeader>
					I'm a Thai illustrator currently based in Los Angeles recently graduated from Rhode Island
					School of Design. I love making fun whimsical illustrations that makes people happy. I also
					love exploring nature, animals, being outside, and radish.
					<SocialBox>
						<SocialGrid>
							<img src='/social/email.png' alt='alt' />
							<img src='/social/twitter.png' alt='alt' />
							<img src='/social/instagram.png' alt='alt' />
						</SocialGrid>
					</SocialBox>
				</FQBlock>
				<FQBlock gap={'1em'}>
					<ATitle>Harim Choi</ATitle>
					<FHeader>“Illustrator based in grassland. Louie is very cute {`${'<'}3`}”</FHeader>I am an
					illustrator based in Long Island, NY and a recent graduate from RISD Illustration.
					<SocialBox>
						<SocialGrid>
							<img src='/social/email.png' alt='alt' />
							<img src='/social/twitter.png' alt='alt' />
							<img src='/social/instagram.png' alt='alt' />
						</SocialGrid>
					</SocialBox>
				</FQBlock>
			</FQGrid>
		</FQMiddle>
	)
}
