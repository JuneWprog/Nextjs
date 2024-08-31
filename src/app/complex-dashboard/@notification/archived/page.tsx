import Link from 'next/link';
export default function ArchivedNotification() {
    return (
        <div>
            <h1>Archived Notification</h1>
            <p> can be access from url</p>
            <p>This is the default Notification page </p>
            <Link href="/complex-dashboard" className="underline"> to default notification</Link>
        </div>
    )
}