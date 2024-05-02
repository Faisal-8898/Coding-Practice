from moviepy import VideoFileClip
from moviepy.video.fx import slow_mo_dedup

# Load the input video
clip = VideoFileClip("glam.mov")

# Create a slow-motion video clip with 120fps using optical flow interpolation
slow_mo_clip = slow_mo_dedup.slow_mo(clip, 0.25, use_flow=True)

# Write the slow-motion video clip to a file
slow_mo_clip.write_videofile("output_slowmo_video.mp4", fps=120)