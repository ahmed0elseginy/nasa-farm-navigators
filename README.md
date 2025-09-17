# NASA Farm Navigators 🌱🛰️

A Next.js web application that harnesses NASA Earth observation data to provide intelligent agricultural insights and recommendations for farmers.

## 🚀 Features

### 📊 Data Explorer
- Interactive maps with NASA satellite data layers
- NDVI (Normalized Difference Vegetation Index) visualization
- Soil moisture and rainfall pattern analysis
- Historical data timeline with playback controls
- Field boundary drawing and selection tools

### 🤖 Smart Advisories
- AI-powered farming recommendations
- Irrigation scheduling based on soil moisture
- Fertilization timing optimization
- Planting and harvesting window predictions
- Real-time field health monitoring

### 🎮 3D Field Laboratory
- Upload and visualize 3D farm models (GLTF/GLB)
- Overlay NASA data on 3D representations
- Multiple view modes (Raw, NDVI, Soil Moisture, Temperature)
- Interactive 3D scene with orbit controls
- Heatmap visualization on 3D meshes

### 📚 Learning Center
- Educational content about NASA Earth observation data
- Precision agriculture best practices
- Data interpretation guides
- Quick start tutorials

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **3D Graphics**: React Three Fiber + Three.js
- **Maps**: Mapbox GL JS (placeholder implementation)
- **Data Visualization**: Recharts
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nasa-space
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── explorer/          # Data Explorer page
│   ├── advisories/        # Smart Advisories page
│   ├── 3d-lab/           # 3D Field Laboratory page
│   ├── learn/            # Learning Center page
│   ├── about/            # About page
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── maps/             # Map-related components
│   ├── 3d/               # 3D visualization components
│   ├── forms/            # Form components
│   ├── Hero.tsx          # Hero section
│   └── MetricCard.tsx    # Metrics display
└── lib/                  # Utility functions
    └── utils.ts          # Common utilities
```

## 🌟 Key Components

### MapView
Interactive map component with NASA data layer toggles and field drawing tools.

### ThreeScene
3D visualization canvas using React Three Fiber with model loading and data overlay capabilities.

### Timeline
Time-based data navigation with playback controls for historical analysis.

### AdvisoryCard
AI-generated farming recommendations with priority levels and actionable insights.

### FileDrop
Drag-and-drop interface for uploading 3D farm models (GLTF/GLB format).

## 🛰️ NASA Data Integration

The application is designed to integrate with various NASA Earth observation datasets:

- **MODIS**: Vegetation indices and land surface temperature
- **Landsat**: High-resolution imagery and NDVI
- **SMAP**: Soil moisture data
- **GPM**: Precipitation measurements
- **Sentinel-2**: Crop monitoring and analysis

## 🎯 NASA Space Apps Challenge 2025

This project was developed for the NASA Space Apps Challenge 2025 under the challenge:
**"NASA Farm Navigators: Using NASA Data Exploration in Agriculture"**

The goal is to make NASA Earth observation data accessible and actionable for farmers worldwide, promoting sustainable agriculture and data-driven decision making.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- NASA for providing Earth observation data
- NASA Space Apps Challenge organizers
- The open-source community for amazing tools and libraries
- Farmers worldwide who inspire data-driven agriculture

## 📞 Support

For questions, feedback, or support, please:
- Open an issue on GitHub
- Contact the development team
- Visit our learning center for documentation

---

Built with ❤️ for the NASA Space Apps Challenge 2025