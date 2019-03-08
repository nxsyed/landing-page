import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
const ReviewsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1200px) {
      grid-gap: 3rem;
    }
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-l lg:text-xl xl:text-xl`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
const LinkButton = styled.a`
  ${tw`text-2xl font-sans uppercase rounded-full px-4 py-1 leading-normal bg-white text-black hover:bg-react hover:text-white`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
           The New React Serverless Stack
        </BigTitle>
        <Subtitle>How to Build Full-Stack Application Using Serverless, Microservices and React</Subtitle>
        <LinkButton href="https://www.google.com">
          Take me to the tutorials!
        </LinkButton>
      </Hero>
      <Projects offset={1}>
        <Title>Why Serverless?</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Reduce launch time"
            bg="#222222"
          >
            This project is my entry to Adobe's #ChallengeYourPerspective contest.
          </ProjectCard>
          <ProjectCard
            title="Globally Scalable"
            bg="#222222"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="Seamless integration with 3rd Party APIs"
            bg="#222222"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <ReviewsWrapper> 
          <div>
            <AboutHero>
              <Avatar src={avatar} alt="John Doe" />
              <AboutSub>
                The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
                Emoji into my speech to better express myself. Winky face.
              </AboutSub>
            </AboutHero>
          </div>
          <div>
            <AboutHero>
              <Avatar src={avatar} alt="John Doe" />
              <AboutSub>
                The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
                Emoji into my speech to better express myself. Winky face.
              </AboutSub>
            </AboutHero>
          </div>
          <div>
            <AboutHero>
              <Avatar src={avatar} alt="John Doe" />
              <AboutSub>
                The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
                Emoji into my speech to better express myself. Winky face.
              </AboutSub>
            </AboutHero>
          </div>
          <div>
            <AboutHero>
              <Avatar src={avatar} alt="John Doe" />
              <AboutSub>
                The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
                Emoji into my speech to better express myself. Winky face.
              </AboutSub>
            </AboutHero>
          </div>
        </ReviewsWrapper>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hello</a> or find us on other platforms:{' '}
            <a href="https://twitter.com/nxsyed">Twitter</a> &{' '}
            <a href="https://www.instagram.com/nxsyed/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by React Serverless.{' '}
          Made by{' '}
          <a href="https://www.nxsyed.com">Syed Ahmed</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
