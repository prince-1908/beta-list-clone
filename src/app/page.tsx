import Wrapper from '@/components/wrapper';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchStartups = async () => {
	const startups = await prisma.startups.findMany();
	return startups;
}

export default async function Home() {

	const startups = await fetchStartups();

	// require('dotenv').config();
	// const databaseUrl = process.env.DATABASE_URL;

	return (
		<>
			<Wrapper startups={startups}/>
		</>
	)
}