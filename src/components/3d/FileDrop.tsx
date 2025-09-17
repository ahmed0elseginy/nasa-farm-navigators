"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, File, X, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  url: string
}

interface FileDropProps {
  onFileUploaded?: (fileUrl: string) => void
  onModelLoading?: (loading: boolean) => void
}

export function FileDrop({ onFileUploaded, onModelLoading }: FileDropProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isUploading, setIsUploading] = useState(false)

  const handleFiles = useCallback(async (files: File[]) => {
    setIsUploading(true)
    
    // Simulate file processing
    for (const file of files) {
      if (file.type === "model/gltf-binary" || file.name.endsWith(".glb") || file.name.endsWith(".gltf")) {
        const newFile: UploadedFile = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          url: URL.createObjectURL(file)
        }
        
        // Simulate upload delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        setUploadedFiles(prev => [...prev, newFile])
        
        // Notify parent component about the uploaded file
        if (onFileUploaded) {
          onFileUploaded(newFile.url)
        }
      }
    }
    
    setIsUploading(false)
  }, [onFileUploaded])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }, [handleFiles])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }, [handleFiles])

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id))
  }

  const clearAllModels = () => {
    setUploadedFiles([])
    if (onFileUploaded) {
      onFileUploaded("")
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5" />
            <span>Upload 3D Models</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
              isDragOver 
                ? "border-green-500 bg-green-50" 
                : "border-gray-300 hover:border-gray-400"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">
              Drop 3D models here
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Supports GLTF (.gltf) and GLB (.glb) files
            </p>
            <input
              type="file"
              accept=".gltf,.glb"
              multiple
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <div className="space-y-2">
              <Button asChild>
                <label htmlFor="file-upload" className="cursor-pointer">
                  Choose Files
                </label>
              </Button>
              <Button variant="outline" size="sm" onClick={clearAllModels}>
                Clear All
              </Button>
            </div>
          </div>

          {isUploading && (
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
              <span>Processing files...</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <File className="h-5 w-5" />
              <span>Uploaded Models ({uploadedFiles.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium text-sm">{file.name}</p>
                    <p className="text-xs text-gray-600">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeFile(file.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

          {/* Sample Models */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Models</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => {
                  if (onModelLoading) onModelLoading(true)
                  if (onFileUploaded) onFileUploaded("/3D/SoulFireVar1.glb")
                  setTimeout(() => {
                    if (onModelLoading) onModelLoading(false)
                  }, 500)
                }}
              >
                <File className="h-4 w-4 mr-2" />
                Soul Fire Variant
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => {
                  if (onModelLoading) onModelLoading(true)
                  if (onFileUploaded) onFileUploaded("/3D/tv01_stage.glb")
                  setTimeout(() => {
                    if (onModelLoading) onModelLoading(false)
                  }, 500)
                }}
              >
                <File className="h-4 w-4 mr-2" />
                TV Stage
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => {
                  if (onModelLoading) onModelLoading(true)
                  if (onFileUploaded) onFileUploaded("/3D/BOMB.glb")
                  setTimeout(() => {
                    if (onModelLoading) onModelLoading(false)
                  }, 500)
                }}
              >
                <File className="h-4 w-4 mr-2" />
                Bomb Model
              </Button>
            </CardContent>
          </Card>
    </div>
  )
}
