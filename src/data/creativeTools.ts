export interface CreativeTool {
    name: string;
    url: string;
    description: string;
}

export interface CreativePersona {
    persona: string;
    tools: CreativeTool[];
}

export const creativeToolsData: CreativePersona[] = [
    {
        persona: "videographers",
        tools: [
            {
                name: "Veo 3.1",
                url: "https://deepmind.google/technologies/veo/",
                description: "High-fidelity AI video generation model for creators."
            },
            {
                name: "Google Earth Studio",
                url: "https://earth.google.com/studio/",
                description: "Professional 3D flyovers and animation tools."
            },
            {
                name: "Flow",
                url: "https://labs.google/flow",
                description: "AI-native filmmaking hub for concept-to-frame workflows."
            },
            {
                name: "YouTube Create",
                url: "https://blog.youtube/news-and-events/introducing-youtube-create/",
                description: "Advanced mobile video editing with AI music syncing."
            },
            {
                name: "MediaPipe",
                url: "https://developers.google.com/mediapipe",
                description: "Real-time hand and face tracking for motion capture."
            }
        ]
    },
    {
        persona: "map-makers",
        tools: [
            {
                name: "Earth Engine",
                url: "https://earthengine.google.com/",
                description: "Planetary-scale geospatial data analysis platform."
            },
            {
                name: "Geospatial Creator",
                url: "https://arvr.google.com/geospatial-creator/",
                description: "Place 3D objects in the real world via Maps data."
            },
            {
                name: "Environmental Insights",
                url: "https://insights.sustainability.google/",
                description: "High-res climate and urban data for map visualizations."
            },
            {
                name: "Solar API",
                url: "https://developers.google.com/maps/documentation/solar",
                description: "Rooftop solar potential data for custom builds."
            },
            {
                name: "Address Validation API",
                url: "https://developers.google.com/maps/documentation/address-validation",
                description: "Clean and verify global geospatial datasets."
            }
        ]
    },
    {
        persona: "photographers",
        tools: [
            {
                name: "Magic Editor",
                url: "https://www.google.com/photos/about/",
                description: "AI-powered subject movement and sky replacement."
            },
            {
                name: "Snapseed",
                url: "https://www.snapseed.com/",
                description: "The gold-standard for non-destructive mobile RAW editing."
            },
            {
                name: "SynthID Image Hub",
                url: "https://deepmind.google/technologies/synthid/",
                description: "Invisible watermarking to protect photography from AI scraping."
            },
            {
                name: "Cloud Vision AI",
                url: "https://cloud.google.com/vision",
                description: "Batch metadata and AI-tagging for large photo libraries."
            },
            {
                name: "Portrait Light API",
                url: "https://developers.google.com/ml-kit/vision/face-detection",
                description: "Adjust light sources on portraits after the shot."
            }
        ]
    },
    {
        persona: "vr-enthusiasts",
        tools: [
            {
                name: "Android XR SDK",
                url: "https://developer.android.com/xr",
                description: "Develop for the future of Google’s mixed reality ecosystem."
            },
            {
                name: "WebXR for Chrome",
                url: "https://immersiveweb.dev/",
                description: "Build browser-based VR/AR without requiring native apps."
            },
            {
                name: "Genie 3",
                url: "https://deepmind.google/technologies/genie/",
                description: "AI that generates interactive 3D worlds from images."
            },
            {
                name: "Tilt Brush (OS)",
                url: "https://github.com/googlearchive/tilt-brush",
                description: "Open-source VR painting and 3D sculpting software."
            },
            {
                name: "Geospatial Creator (Unity)",
                url: "https://arvr.google.com/geospatial-creator/",
                description: "Import 3D world tiles directly into Unity game engines."
            }
        ]
    }
];
