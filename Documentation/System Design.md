# System Design Document: Link Clicks Tracking

## Introduction

This document outlines a design for a URL Shortening & Tracking Service.

The main purpose of this system is to track user interactions on URLs in HTML content served in emails. 

// TODO: more detail

The system is split into two main components
- HTML Processor
- URL Shortening & Tacking Service

### Functional Requirements:

#### HTML Processor
- Parse Raw HTML Input, replacing URLs with a shortened, unique tracking URL

#### URL Shortener & Tracking Service
- Generate & Store matching URL pairs 
- Track visits to shortened URLs
- Redirect visits to shortened URLs to their paired long URL


### Non-Functional Requirements:
- Scalability
- High Availability
- High throughput, low latency



## High-Level Architecture

// TODO: Diagrams

This section provides an overview of the main components and their interactions.

- system overview
- component identification
- data flow summary

## Detailed Design

### HTML Parsing Service
- Functionality
- DS
- Algorithms

### URL Shortening & Tracking Service
- Functionality
- DS
- Endpoints/Functions
- Logic (redirection, logging)

### Datastore & DB 

// TODO Explain DBs & Stores used, remember can be mocked out. Schema & Implementation not required.


### Data Flow Diagram Detailed

// TODO

### Considerations
- Scaling
- Fault Tolerance, Monitoring
- // TODO: Add more, think more
