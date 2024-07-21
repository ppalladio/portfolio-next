export default function CvLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col items-stretch justify-around my-10">
            {children}
        </div>
    );
}

