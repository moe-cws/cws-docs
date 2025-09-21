# Test Mermaid Diagrams

This page tests various Mermaid diagram types to ensure they render correctly.

## Simple Flowchart

```mermaid
graph TB
    A[Customer Opens App] --> B{Location Enabled?}
    B -->|Yes| C[Show Nearby Providers]
    B -->|No| D[Request Location Permission]
    D --> B
    C --> E[Customer Selects Provider]
    E --> F[Booking Flow]
```

## Qatar Car Wash System Architecture

```mermaid
graph TB
    subgraph "Client Applications"
        A[Flutter Mobile App<br/>Customer Interface]
        B[Angular Admin Portal<br/>Provider Management]
        C[Angular PWA<br/>Service Unit App]
        D[Angular Dashboard<br/>System Admin]
    end

    subgraph "API Gateway Layer"
        E[ASP.NET Core Web API<br/>Authentication & Business Logic]
    end

    subgraph "Data Layer"
        F[(Azure PostgreSQL<br/>Primary Database)]
        G[(Redis Cache<br/>Session & Real-time Data)]
    end

    subgraph "External Services"
        H[Google Maps API<br/>Location Services]
        I[QNB/QIIB Payment<br/>Gateway Integration]
        J[SMS Gateway<br/>Qatar Provider]
        K[Firebase FCM<br/>Push Notifications]
    end

    A --> E
    B --> E
    C --> E
    D --> E
    E --> F
    E --> G
    E --> H
    E --> I
    E --> J
    E --> K

    style A fill:#673AB7,stroke:#009688,stroke-width:3px,color:#FFFFFF
    style B fill:#009688,stroke:#673AB7,stroke-width:3px,color:#FFFFFF
    style C fill:#4A1458,stroke:#009688,stroke-width:3px,color:#FFFFFF
    style D fill:#00695C,stroke:#673AB7,stroke-width:3px,color:#FFFFFF
    style E fill:#8A1538,stroke:#FFD700,stroke-width:3px,color:#FFFFFF
    style F fill:#1A1A1F,stroke:#009688,stroke-width:3px,color:#FFFFFF
    style G fill:#2C2C34,stroke:#673AB7,stroke-width:3px,color:#FFFFFF
    style H fill:#3A3A42,stroke:#FFD700,stroke-width:3px,color:#FFFFFF
    style I fill:#673AB7,stroke:#FFD700,stroke-width:3px,color:#FFFFFF
    style J fill:#009688,stroke:#FFD700,stroke-width:3px,color:#FFFFFF
    style K fill:#4A1458,stroke:#FFD700,stroke-width:3px,color:#FFFFFF
```

## Sequence Diagram - Booking Process

```mermaid
sequenceDiagram
    participant C as Customer
    participant A as Mobile App
    participant API as Backend API
    participant P as Provider
    participant SMS as SMS Gateway

    C->>A: Open app and search providers
    A->>API: GET /providers?location=doha
    API->>A: Return nearby providers
    A->>C: Display providers on map

    C->>A: Select provider and service
    A->>API: POST /bookings
    API->>SMS: Send booking confirmation SMS
    SMS->>C: Booking confirmed SMS
    API->>P: Notify new booking
    P->>API: Accept booking
    API->>SMS: Send acceptance notification
    SMS->>C: Provider accepted SMS
```

## Gantt Chart - Development Timeline

```mermaid
gantt
    title Qatar Car Wash Platform Development
    dateFormat  YYYY-MM-DD
    section Milestone 1
    Repository Setup    :done, m1-1, 2025-09-01, 2025-09-07
    Authentication      :done, m1-2, 2025-09-08, 2025-09-14
    Provider Discovery  :active, m1-3, 2025-09-15, 2025-09-21

    section Milestone 2
    Testing Environment :m2-1, 2025-09-22, 2025-10-05
    App Store Deploy    :m2-2, 2025-09-29, 2025-10-05

    section Milestone 3
    Cultural Integration:m3-1, 2025-10-06, 2025-10-26
    Arabic RTL Support  :m3-2, 2025-10-13, 2025-10-26

    section Milestone 4
    Payment Integration :m4-1, 2025-10-27, 2025-11-23
    Rating System       :m4-2, 2025-11-03, 2025-11-23

    section Milestone 5
    Beta Testing        :m5-1, 2025-11-24, 2025-12-31
    Live Launch         :m5-2, 2025-12-15, 2025-12-31
```

## State Diagram - Booking Status

```mermaid
stateDiagram-v2
    [*] --> Searching
    Searching --> ProviderSelected : Provider chosen
    ProviderSelected --> BookingRequested : Submit booking
    BookingRequested --> BookingConfirmed : Provider accepts
    BookingRequested --> BookingRejected : Provider declines
    BookingRejected --> Searching : Find new provider
    BookingConfirmed --> ServiceInProgress : Service starts
    ServiceInProgress --> ServiceCompleted : Service finished
    ServiceCompleted --> PaymentProcessed : Payment complete
    PaymentProcessed --> [*]
    BookingConfirmed --> BookingCancelled : Customer cancels
    BookingCancelled --> [*]
```

All diagrams should now render properly with Qatar-themed colors!