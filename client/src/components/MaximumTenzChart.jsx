import React, { useEffect, useRef, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
);

const MaximumTenzChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const emailButtonRef = useRef(null);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationPosition, setNotificationPosition] = useState({ x: 0, y: 0 });

    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('maxrautenkranz@gmail.com');
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 1000); // Hide after 1 second
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    useEffect(() => {
        if (chartRef.current) {
            // Destroy existing chart instance if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }

            const ctx = chartRef.current.getContext('2d');

            // Letter coordinate data for "MAXIMUM TENZ"
            const letterData = {
                M: [{ x: 1, y: 1 }, { x: 1, y: 5 }, { x: 2.5, y: 3 }, { x: 4, y: 5 }, { x: 4, y: 1 }],
                A1: [{ x: 5.5, y: 1 }, { x: 6, y: 5 }, { x: 8, y: 5 }, { x: 8.5, y: 1 }],
                A1_cross: [{ x: 6.5, y: 3 }, { x: 7.5, y: 3 }],
                X1: [{ x: 10, y: 1 }, { x: 13, y: 5 }],
                X1_cross: [{ x: 10, y: 5 }, { x: 13, y: 1 }],
                R: [{ x: 16, y: 1 }, { x: 16, y: 5 }, { x: 18, y: 5 }, { x: 18, y: 3 }, { x: 16, y: 3 }, { x: 19, y: 1 }],
                A2: [{ x: 20.5, y: 1 }, { x: 21, y: 5 }, { x: 23, y: 5 }, { x: 23.5, y: 1 }],
                A2_cross: [{ x: 21.5, y: 3 }, { x: 22.5, y: 3 }],
                U: [{ x: 25, y: 5 }, { x: 25, y: 1 }, { x: 27, y: 1 }, { x: 27, y: 5 }],
                T: [{ x: 28.5, y: 5 }, { x: 30.5, y: 5 }],
                T_stem: [{ x: 29.5, y: 5 }, { x: 29.5, y: 1 }],
                E: [{ x: 32, y: 1 }, { x: 32, y: 5 }, { x: 34, y: 5 }],
                E_mid: [{ x: 32, y: 3 }, { x: 33.5, y: 3 }],
                E_bot: [{ x: 32, y: 1 }, { x: 34, y: 1 }],
                N1: [{ x: 35.5, y: 1 }, { x: 35.5, y: 5 }, { x: 37.5, y: 1 }, { x: 37.5, y: 5 }],
                K: [{ x: 39, y: 1 }, { x: 39, y: 5 }],
                K_upper: [{ x: 39, y: 3 }, { x: 41, y: 5 }],
                K_lower: [{ x: 39, y: 3 }, { x: 41, y: 1 }],
                R2: [{ x: 42.5, y: 1 }, { x: 42.5, y: 5 }, { x: 44.5, y: 5 }, { x: 44.5, y: 3 }, { x: 42.5, y: 3 }, { x: 45.5, y: 1 }],
                A3: [{ x: 47, y: 1 }, { x: 47.5, y: 5 }, { x: 49.5, y: 5 }, { x: 50, y: 1 }],
                A3_cross: [{ x: 48, y: 3 }, { x: 49, y: 3 }],
                N2: [{ x: 51.5, y: 1 }, { x: 51.5, y: 5 }, { x: 53.5, y: 1 }, { x: 53.5, y: 5 }],
                Z: [{ x: 55, y: 5 }, { x: 57, y: 5 }, { x: 55, y: 1 }, { x: 57, y: 1 }]
            };

            const datasets = [];
            const letterColor = '#3498db';

            Object.keys(letterData).forEach(letter => {
                datasets.push({
                    label: '',
                    data: letterData[letter],
                    borderColor: letterColor,
                    backgroundColor: letterColor,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    tension: 0,
                    showLine: true
                });
            });

            try {
                chartInstance.current = new ChartJS(ctx, {
                    type: 'line',
                    data: { datasets },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: { display: false },
                            legend: { display: false },
                            tooltip: { enabled: false }
                        },
                        scales: {
                            x: {
                                type: 'linear',
                                display: true,
                                min: -1,
                                max: 59,
                                title: { display: false },
                                grid: {
                                    color: 'rgba(52, 152, 219, 0.15)',
                                    lineWidth: 1
                                },
                                ticks: {
                                    display: false,
                                    stepSize: 5
                                }
                            },
                            y: {
                                display: true,
                                min: 0,
                                max: 6,
                                title: { display: false },
                                grid: {
                                    color: 'rgba(52, 152, 219, 0.15)',
                                    lineWidth: 1
                                },
                                ticks: {
                                    display: false,
                                    stepSize: 1
                                }
                            }
                        },
                        elements: {
                            line: {
                                borderJoinStyle: 'round',
                                borderCapStyle: 'round'
                            }
                        },
                        interaction: {
                            intersect: false,
                            mode: 'none'
                        },
                        animation: {
                            duration: 0
                        }
                    }
                });
            } catch (error) {
                console.error('Error creating chart:', error);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
                chartInstance.current = null;
            }
        };
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '720px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            {/* Chart Container */}
            <div style={{
                width: '720px',
                height: '288px',
                backgroundColor: '#f0f0f0',
                border: '2px solid #d0d0d0',
                borderRadius: '4px',
                padding: '20px',
                boxShadow: '1px 1px 2px rgba(0,0,0,0.1)'
            }}>
                <canvas ref={chartRef} />
            </div>

            {/* Excel-style Buttons */}
            <div style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <div style={{
                    backgroundColor: '#f0f0f0',
                    border: '2px solid #d0d0d0',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#333',
                    cursor: 'pointer',
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    minWidth: '80px',
                    textAlign: 'center'
                }}>
                    Product Manager
                </div>
                <div style={{
                    backgroundColor: '#f0f0f0',
                    border: '2px solid #d0d0d0',
                    borderRadius: '4px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#333',
                    cursor: 'pointer',
                    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    minWidth: '80px',
                    textAlign: 'center'
                }}>
                    Dallas, TX
                </div>
                <div
                    ref={emailButtonRef}
                    style={{
                        backgroundColor: '#f0f0f0',
                        border: '2px solid #d0d0d0',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#333',
                        cursor: 'pointer',
                        boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                        minWidth: '80px',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                    onClick={copyEmailToClipboard}
                >
                    maxrautenkranz@gmail.com

                    {/* Copy Notification - positioned relative to this button */}
                    {showNotification && (
                        <div style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            border: '2px solid rgba(51, 51, 51, 0.8)',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#333',
                            zIndex: 10000,
                            whiteSpace: 'nowrap',
                            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                            marginBottom: '8px',
                            backdropFilter: 'blur(2px)'
                        }}>
                            copied
                            {/* Speech bubble tail */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-8px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '0',
                                height: '0',
                                borderLeft: '6px solid transparent',
                                borderRight: '6px solid transparent',
                                borderTop: '8px solid rgba(51, 51, 51, 0.8)'
                            }}></div>
                        </div>
                    )}
                </div>
                <a
                    href="https://www.linkedin.com/in/rautenkranz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: '#f0f0f0',
                        border: '2px solid #d0d0d0',
                        borderRadius: '4px',
                        padding: '6px 8px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#333',
                        cursor: 'pointer',
                        boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                        minWidth: '40px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0077B5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
            </div>

            {/* Remove the old notification div */}
            {/* {showNotification && (
                <div style={{
                    position: 'fixed',
                    left: `${notificationPosition.x}px`,
                    top: `${notificationPosition.y}px`,
                    transform: 'translateX(-50%)',
                    backgroundColor: 'white',
                    border: '2px solid #333',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#333',
                    zIndex: 10000,
                    whiteSpace: 'nowrap',
                    boxShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}>
                    copied
                    <div style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '8px solid #333'
                    }}></div>
                </div>
            )} */}
        </div>
    );
};

export default MaximumTenzChart;
