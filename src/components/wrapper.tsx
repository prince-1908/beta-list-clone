'use client'
import { Nav } from '@/components/nav';
import { TrendingTopics } from '@/components/trendingTopics';
import { Trending } from '@/components/trending';
import { Discover } from '@/components/discover';
import { GetEmail } from '@/components/getEmail';
import { Startups } from '@/components/startups';
import { useState } from 'react';

export default function Wrapper() {

	const [discover, setDiscover] = useState(true);
	const [getEmail, setGetEmail] = useState(true);

	const discoverShow = (value: boolean) => {
		setDiscover(value);
	}

	const getEmailShow = (value: boolean) => {
		setGetEmail(value);
	}
	return (
		<>
			<Nav />
			<TrendingTopics />
			{discover && <Discover discoverShow={discoverShow} />}
			<Trending />
			{getEmail && <GetEmail getEmailShow={getEmailShow} />}
			<Startups/>
		</>
	)
}