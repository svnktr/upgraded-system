---
title: Why this site looks like a status page
date: 2026-10-26
summary: For eight years my job was keeping systems up. So I made my portfolio read like the thing I care about most.
---

Most of my career has been spent on systems that people only notice when they break. Telecom platforms, reporting databases, release pipelines. When they work, nobody thinks about them. That is the point.

So when I sat down to build a portfolio, a timeline of job titles felt wrong. It says what I was called, not what I did. A status page is closer to the truth: a long run of quarters where things stayed up, a few incident reports that show how I think when they don't, and a changelog of how I got here.

## What's here

- **The uptime bar** at the top has one block per quarter since my first day in December 2017. The amber blocks at the end are a maintenance window: time I took to build and study before my next role.
- **Incident reports** are real problems I worked on, written the way I'd write a postmortem: impact, what I did, result.
- **The changelog** is my career in versions.
- **Notes**, like this one, are where I'll write about what I learn.

## How it's built

React and Vite, deployed to GitHub Pages by a GitHub Actions workflow. Each note is a Markdown file in the repository, so publishing one is a commit. The source is on [GitHub](https://github.com/svnktr/upgraded-system).
