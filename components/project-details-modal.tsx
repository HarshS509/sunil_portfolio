"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    image: string;
    category: string;
    software: string;
    polygons: string;
    renderTime: string;
  };
}

export default function ProjectDetailsModal({
  isOpen,
  onClose,
  project,
}: ProjectDetailsModalProps) {
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // For Car and Jewellery, only show the selected image
      if (project.category === "Car" || project.category === "Jewellery") {
        setImages([project.image]);
        setIsLoading(false);
      } else {
        // Extract the folder path from the project image
        const folderPath = project.image.substring(
          0,
          project.image.lastIndexOf("/")
        );

        // Fetch all images from the folder
        fetch(`/api/project-images?folder=${encodeURIComponent(folderPath)}`)
          .then((res) => res.json())
          .then((data) => {
            setImages(data.images);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching images:", error);
            // If there's an error, just show the current image
            setImages([project.image]);
            setIsLoading(false);
          });
      }
    }
  }, [isOpen, project.image, project.category]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full bg-gray-900 text-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-emerald-500">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="relative mt-4 flex justify-center items-center">
          {isLoading ? (
            <div className="h-[400px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
          ) : (
            <>
              <div className="relative h-[400px] w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] mx-auto">
                <Image
                  src={images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain rounded"
                />
                {images.length > 1 && (
                  <>
                    <Button
                      onClick={previousImage}
                      className="!absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-900 shadow-lg px-3 py-2 z-10"
                      size="icon"
                      aria-label="Previous image"
                    >
                      <span className="text-2xl font-bold">&#8592;</span>
                    </Button>
                    <Button
                      onClick={nextImage}
                      className="!absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-900 shadow-lg px-3 py-2 z-10"
                      size="icon"
                      aria-label="Next image"
                    >
                      <span className="text-2xl font-bold">&#8594;</span>
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-emerald-500 font-medium">Category:</span>
            <br />
            {project.category}
          </div>
          <div>
            <span className="text-emerald-500 font-medium">Software:</span>
            <br />
            {project.software}
          </div>
          <div>
            <span className="text-emerald-500 font-medium">Polygons:</span>
            <br />
            {project.polygons}
          </div>
          <div>
            <span className="text-emerald-500 font-medium">Render Time:</span>
            <br />
            {project.renderTime}
          </div>
        </div>

        {/* <div className="mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-emerald-500 hover:bg-emerald-600 text-black"
          >
            Close
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
