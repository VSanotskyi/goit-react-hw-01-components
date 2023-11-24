import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory
    from "./components/TransactionHistory/TransactionHistory";

import user from "./user.json";
import statistics from "./statistics.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
    return (
        <>
            <Container>
                <Profile user={user}/>
            </Container>
            <Container>
                <Section title="Upload stats">
                    <Statistics statistics={statistics}/>
                </Section>
            </Container>
            <Container>
                <FriendList friends={friends}/>
            </Container>
            <Container>
                <TransactionHistory transactions={transactions}/>
            </Container>
        </>
    );
}