// import Image from 'next/image';

interface ProfileProps {
    imageUrl: string;
    description: string;
}

export function Profile(props: ProfileProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ flex: 1, paddingRight: '100px' }}>
                {/* <Image src={props.imageUrl} alt="Profile Image" width={300} height={300} /> */}
                <p>{props.imageUrl}</p>
            </div>
            <div style={{ flex: 2 }}>
                <p>{props.description}</p>
            </div>
        </div>
    );
}