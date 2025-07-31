import { Button } from '@/components/ui/button';
import { Apple } from 'lucide-react';

const PlayStoreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-current">
        <path d="M21.5,11.33L4.48,0.64C4.21,0.45 3.84,0.43 3.55,0.6C3.25,0.76 3.08,1.08 3.14,1.42L4.6,9.5H16.75L21.5,11.33z M3.14,22.58 c-0.06,0.34 0.11,0.66 0.41,0.82C3.64,23.46 3.76,23.5 3.88,23.5c0.18,0 0.36-0.06 0.52-0.19L21.5,12.67L16.75,14.5H4.6 l-1.46,8.08C3.08,22.92 3.25,23.24 3.55,23.4C3.84,23.57 4.21,23.55 4.48,23.36L21.5,12.67L3.14,22.58z M12.5,14.59l4.38,2.53 c0.29,0.17 0.65,0.17 0.94,0s0.47-0.45 0.47-0.78V7.66c0-0.34-0.18-0.64-0.47-0.78s-0.65-0.17-0.94,0l-4.38,2.53 c-0.29,0.17-0.47,0.45-0.47,0.78S12.21,14.42 12.5,14.59z" />
    </svg>
)

export function GameDownloadButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="border-accent text-accent-foreground bg-accent/90 hover:bg-accent hover:text-accent-foreground">
                <Apple className="mr-2 h-6 w-6" />
                App Store
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent-foreground bg-accent/90 hover:bg-accent hover:text-accent-foreground">
                <PlayStoreIcon />
                <span className="ml-2">Google Play</span>
            </Button>
        </div>
    );
}
