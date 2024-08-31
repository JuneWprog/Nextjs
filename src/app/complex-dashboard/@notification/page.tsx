import Link from 'next/link';
export default function NotificationDefault() {
    return (
        <div>
            <h1>Notification</h1>
            <p>This is an example parallel route</p>
            <p> can not access from url</p>
            <p>This is the default Notification page </p>
            <Link href="/complex-dashboard/archived" className="underline"> to archived notification</Link>
        </div>
    )
}