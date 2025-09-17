"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward, Calendar } from "lucide-react"

export function Timeline() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentDate] = useState("2024-01-15")
  const [selectedDate, setSelectedDate] = useState("2024-01-15")

  const dates = [
    "2024-01-01", "2024-01-15", "2024-02-01", "2024-02-15",
    "2024-03-01", "2024-03-15", "2024-04-01", "2024-04-15",
    "2024-05-01", "2024-05-15", "2024-06-01", "2024-06-15"
  ]

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // In production, this would start/stop the timeline animation
  }

  const handleDateChange = (date: string) => {
    setSelectedDate(date)
    // In production, this would update the map data
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>Timeline</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Playback Controls */}
        <div className="flex items-center justify-center space-x-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDateChange(dates[0])}
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleDateChange(dates[dates.length - 1])}
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        {/* Current Date Display */}
        <div className="text-center">
          <p className="text-sm text-gray-600">Current Date</p>
          <p className="font-medium">{currentDate}</p>
        </div>

        {/* Date Range Slider */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Date Range</label>
          <input
            type="range"
            min="0"
            max={dates.length - 1}
            value={dates.indexOf(selectedDate)}
            onChange={(e) => handleDateChange(dates[parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>{dates[0]}</span>
            <span>{dates[dates.length - 1]}</span>
          </div>
        </div>

        {/* Quick Date Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Quick Select</label>
          <div className="grid grid-cols-2 gap-1">
            <Button
              size="sm"
              variant={selectedDate === "2024-01-01" ? "default" : "outline"}
              onClick={() => handleDateChange("2024-01-01")}
              className="text-xs"
            >
              Jan 1
            </Button>
            <Button
              size="sm"
              variant={selectedDate === "2024-04-01" ? "default" : "outline"}
              onClick={() => handleDateChange("2024-04-01")}
              className="text-xs"
            >
              Apr 1
            </Button>
            <Button
              size="sm"
              variant={selectedDate === "2024-07-01" ? "default" : "outline"}
              onClick={() => handleDateChange("2024-07-01")}
              className="text-xs"
            >
              Jul 1
            </Button>
            <Button
              size="sm"
              variant={selectedDate === "2024-10-01" ? "default" : "outline"}
              onClick={() => handleDateChange("2024-10-01")}
              className="text-xs"
            >
              Oct 1
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
