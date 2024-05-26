interface UserProfile {
    entry: {
        hash: string;
        requestHash: string;
        profileUrl: string;
        preferredUsername: string;
        thumbnailUrl: string;
        photos: {
            value: string;
            type: string;
        }[];
        last_profile_edit: string;
        displayName: string;
        pronouns: string;
        aboutMe: string;
        currentLocation: string;
        accounts: {
            domain: string;
            display: string;
            url: string;
            iconUrl: string;
            username: string;
            verified: string;
            name: string;
            shortname: string;
        }[];
        urls: {
            title: string;
            value: string;
        }[];
        profileBackground: {
            color: string;
            opacity: number;
        };
        share_flags: {
            search_engines: boolean;
        };
    }[];
}
