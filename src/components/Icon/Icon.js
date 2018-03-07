import React, { Component } from 'react'
import { Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowDown, ArrowLeftCircle, ArrowLeft, ArrowRightCircle, ArrowRight, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, ArrowUp, AtSign, Award, BarChart2, BarChart, BatteryCharging, Battery, BellOff, Bell, Bluetooth, Bold, BookOpen, Book, Bookmark, Box, Briefcase, Calendar, CameraOff, Camera, Cast, CheckCircle, CheckSquare, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Cloud, Code, Codepen, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DollarSign, DownloadCloud, Download, Droplet, Edit2, Edit3, Edit, ExternalLink, EyeOff, Eye, Facebook, FastForward, Feather, FileMinus, FilePlus, FileText, File, Film, Filter, Flag, FolderMinus, FolderPlus, Folder, GitBranch, GitCommit, GitMerge, GitPullRequest, Github, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Home, Image, Inbox, Info, Instagram, Italic, Layers, Layout, LifeBuoy, Link2, Link, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, MapPin, Map, Maximize2, Maximize, Menu, MessageCircle, MessageSquare, MicOff, Mic, Minimize2, Minimize, MinusCircle, MinusSquare, Minus, Monitor, Moon, MoreHorizontal, MoreVertical, Move, Music, Navigation2, Navigation, Octagon, Package, Paperclip, PauseCircle, Pause, Percent, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Phone, PieChart, PlayCircle, Play, PlusCircle, PlusSquare, Plus, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share2, Share, ShieldOff, Shield, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Trash2, Trash, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitter, Type, Umbrella, Underline, Unlock, UploadCloud, Upload, UserCheck, UserMinus, UserPlus, UserX, User, Users, VideoOff, Video, Voicemail, Volume1, Volume2, VolumeX, Volume, Watch, WifiOff, Wifi, Wind, XCircle, XSquare, X, ZapOff, Zap, ZoomIn, ZoomOut } from 'react-feather';

class Icon extends Component {

	renderIcon() {
		switch (this.props.name) {
			case "Activity":
				return <Activity size="48" />;
			case "Airplay":
				return <Airplay size="48" />;
			case "AlertCircle":
				return <AlertCircle size="48" />;
			case "AlertOctagon":
				return <AlertOctagon size="48" />;
			case "AlertTriangle":
				return <AlertTriangle size="48" />;
			case "AlignCenter":
				return <AlignCenter size="48" />;
			case "AlignJustify":
				return <AlignJustify size="48" />;
			case "AlignLeft":
				return <AlignLeft size="48" />;
			case "AlignRight":
				return <AlignRight size="48" />;
			case "Anchor":
				return <Anchor size="48" />;
			case "Aperture":
				return <Aperture size="48" />;
			case "ArrowDownCircle":
				return <ArrowDownCircle size="48" />;
			case "ArrowDownLeft":
				return <ArrowDownLeft size="48" />;
			case "ArrowDownRight":
				return <ArrowDownRight size="48" />;
			case "ArrowDown":
				return <ArrowDown size="48" />;
			case "ArrowLeftCircle":
				return <ArrowLeftCircle size="48" />;
			case "ArrowLeft":
				return <ArrowLeft size="48" />;
			case "ArrowRightCircle":
				return <ArrowRightCircle size="48" />;
			case "ArrowRight":
				return <ArrowRight size="48" />;
			case "ArrowUpCircle":
				return <ArrowUpCircle size="48" />;
			case "ArrowUpLeft":
				return <ArrowUpLeft size="48" />;
			case "ArrowUpRight":
				return <ArrowUpRight size="48" />;
			case "ArrowUp":
				return <ArrowUp size="48" />;
			case "AtSign":
				return <AtSign size="48" />;
			case "Award":
				return <Award size="48" />;
			case "BarChart2":
				return <BarChart2 size="48" />;
			case "BarChart":
				return <BarChart size="48" />;
			case "BatteryCharging":
				return <BatteryCharging size="48" />;
			case "Battery":
				return <Battery size="48" />;
			case "BellOff":
				return <BellOff size="48" />;
			case "Bell":
				return <Bell size="48" />;
			case "Bluetooth":
				return <Bluetooth size="48" />;
			case "Bold":
				return <Bold size="48" />;
			case "BookOpen":
				return <BookOpen size="48" />;
			case "Book":
				return <Book size="48" />;
			case "Bookmark":
				return <Bookmark size="48" />;
			case "Box":
				return <Box size="48" />;
			case "Briefcase":
				return <Briefcase size="48" />;
			case "Calendar":
				return <Calendar size="48" />;
			case "CameraOff":
				return <CameraOff size="48" />;
			case "Camera":
				return <Camera size="48" />;
			case "Cast":
				return <Cast size="48" />;
			case "CheckCircle":
				return <CheckCircle size="48" />;
			case "CheckSquare":
				return <CheckSquare size="48" />;
			case "Check":
				return <Check size="48" />;
			case "ChevronDown":
				return <ChevronDown size="48" />;
			case "ChevronLeft":
				return <ChevronLeft size="48" />;
			case "ChevronRight":
				return <ChevronRight size="48" />;
			case "ChevronUp":
				return <ChevronUp size="48" />;
			case "ChevronsDown":
				return <ChevronsDown size="48" />;
			case "ChevronsLeft":
				return <ChevronsLeft size="48" />;
			case "ChevronsRight":
				return <ChevronsRight size="48" />;
			case "ChevronsUp":
				return <ChevronsUp size="48" />;
			case "Chrome":
				return <Chrome size="48" />;
			case "Circle":
				return <Circle size="48" />;
			case "Clipboard":
				return <Clipboard size="48" />;
			case "Clock":
				return <Clock size="48" />;
			case "CloudDrizzle":
				return <CloudDrizzle size="48" />;
			case "CloudLightning":
				return <CloudLightning size="48" />;
			case "CloudOff":
				return <CloudOff size="48" />;
			case "CloudRain":
				return <CloudRain size="48" />;
			case "CloudSnow":
				return <CloudSnow size="48" />;
			case "Cloud":
				return <Cloud size="48" />;
			case "Code":
				return <Code size="48" />;
			case "Codepen":
				return <Codepen size="48" />;
			case "Command":
				return <Command size="48" />;
			case "Compass":
				return <Compass size="48" />;
			case "Copy":
				return <Copy size="48" />;
			case "CornerDownLeft":
				return <CornerDownLeft size="48" />;
			case "CornerDownRight":
				return <CornerDownRight size="48" />;
			case "CornerLeftDown":
				return <CornerLeftDown size="48" />;
			case "CornerLeftUp":
				return <CornerLeftUp size="48" />;
			case "CornerRightDown":
				return <CornerRightDown size="48" />;
			case "CornerRightUp":
				return <CornerRightUp size="48" />;
			case "CornerUpLeft":
				return <CornerUpLeft size="48" />;
			case "CornerUpRight":
				return <CornerUpRight size="48" />;
			case "Cpu":
				return <Cpu size="48" />;
			case "CreditCard":
				return <CreditCard size="48" />;
			case "Crop":
				return <Crop size="48" />;
			case "Crosshair":
				return <Crosshair size="48" />;
			case "Database":
				return <Database size="48" />;
			case "Delete":
				return <Delete size="48" />;
			case "Disc":
				return <Disc size="48" />;
			case "DollarSign":
				return <DollarSign size="48" />;
			case "DownloadCloud":
				return <DownloadCloud size="48" />;
			case "Download":
				return <Download size="48" />;
			case "Droplet":
				return <Droplet size="48" />;
			case "Edit2":
				return <Edit2 size="48" />;
			case "Edit3":
				return <Edit3 size="48" />;
			case "Edit":
				return <Edit size="48" />;
			case "ExternalLink":
				return <ExternalLink size="48" />;
			case "EyeOff":
				return <EyeOff size="48" />;
			case "Eye":
				return <Eye size="48" />;
			case "Facebook":
				return <Facebook size="48" />;
			case "FastForward":
				return <FastForward size="48" />;
			case "Feather":
				return <Feather size="48" />;
			case "FileMinus":
				return <FileMinus size="48" />;
			case "FilePlus":
				return <FilePlus size="48" />;
			case "FileText":
				return <FileText size="48" />;
			case "File":
				return <File size="48" />;
			case "Film":
				return <Film size="48" />;
			case "Filter":
				return <Filter size="48" />;
			case "Flag":
				return <Flag size="48" />;
			case "FolderMinus":
				return <FolderMinus size="48" />;
			case "FolderPlus":
				return <FolderPlus size="48" />;
			case "Folder":
				return <Folder size="48" />;
			case "GitBranch":
				return <GitBranch size="48" />;
			case "GitCommit":
				return <GitCommit size="48" />;
			case "GitMerge":
				return <GitMerge size="48" />;
			case "GitPullRequest":
				return <GitPullRequest size="48" />;
			case "Github":
				return <Github size="48" />;
			case "Gitlab":
				return <Gitlab size="48" />;
			case "Globe":
				return <Globe size="48" />;
			case "Grid":
				return <Grid size="48" />;
			case "HardDrive":
				return <HardDrive size="48" />;
			case "Hash":
				return <Hash size="48" />;
			case "Headphones":
				return <Headphones size="48" />;
			case "Heart":
				return <Heart size="48" />;
			case "HelpCircle":
				return <HelpCircle size="48" />;
			case "Home":
				return <Home size="48" />;
			case "Image":
				return <Image size="48" />;
			case "Inbox":
				return <Inbox size="48" />;
			case "Info":
				return <Info size="48" />;
			case "Instagram":
				return <Instagram size="48" />;
			case "Italic":
				return <Italic size="48" />;
			case "Layers":
				return <Layers size="48" />;
			case "Layout":
				return <Layout size="48" />;
			case "LifeBuoy":
				return <LifeBuoy size="48" />;
			case "Link2":
				return <Link2 size="48" />;
			case "Link":
				return <Link size="48" />;
			case "Linkedin":
				return <Linkedin size="48" />;
			case "List":
				return <List size="48" />;
			case "Loader":
				return <Loader size="48" />;
			case "Lock":
				return <Lock size="48" />;
			case "LogIn":
				return <LogIn size="48" />;
			case "LogOut":
				return <LogOut size="48" />;
			case "Mail":
				return <Mail size="48" />;
			case "MapPin":
				return <MapPin size="48" />;
			case "Map":
				return <Map size="48" />;
			case "Maximize2":
				return <Maximize2 size="48" />;
			case "Maximize":
				return <Maximize size="48" />;
			case "Menu":
				return <Menu size="48" />;
			case "MessageCircle":
				return <MessageCircle size="48" />;
			case "MessageSquare":
				return <MessageSquare size="48" />;
			case "MicOff":
				return <MicOff size="48" />;
			case "Mic":
				return <Mic size="48" />;
			case "Minimize2":
				return <Minimize2 size="48" />;
			case "Minimize":
				return <Minimize size="48" />;
			case "MinusCircle":
				return <MinusCircle size="48" />;
			case "MinusSquare":
				return <MinusSquare size="48" />;
			case "Minus":
				return <Minus size="48" />;
			case "Monitor":
				return <Monitor size="48" />;
			case "Moon":
				return <Moon size="48" />;
			case "MoreHorizontal":
				return <MoreHorizontal size="48" />;
			case "MoreVertical":
				return <MoreVertical size="48" />;
			case "Move":
				return <Move size="48" />;
			case "Music":
				return <Music size="48" />;
			case "Navigation2":
				return <Navigation2 size="48" />;
			case "Navigation":
				return <Navigation size="48" />;
			case "Octagon":
				return <Octagon size="48" />;
			case "Package":
				return <Package size="48" />;
			case "Paperclip":
				return <Paperclip size="48" />;
			case "PauseCircle":
				return <PauseCircle size="48" />;
			case "Pause":
				return <Pause size="48" />;
			case "Percent":
				return <Percent size="48" />;
			case "PhoneCall":
				return <PhoneCall size="48" />;
			case "PhoneForwarded":
				return <PhoneForwarded size="48" />;
			case "PhoneIncoming":
				return <PhoneIncoming size="48" />;
			case "PhoneMissed":
				return <PhoneMissed size="48" />;
			case "PhoneOff":
				return <PhoneOff size="48" />;
			case "PhoneOutgoing":
				return <PhoneOutgoing size="48" />;
			case "Phone":
				return <Phone size="48" />;
			case "PieChart":
				return <PieChart size="48" />;
			case "PlayCircle":
				return <PlayCircle size="48" />;
			case "Play":
				return <Play size="48" />;
			case "PlusCircle":
				return <PlusCircle size="48" />;
			case "PlusSquare":
				return <PlusSquare size="48" />;
			case "Plus":
				return <Plus size="48" />;
			case "Pocket":
				return <Pocket size="48" />;
			case "Power":
				return <Power size="48" />;
			case "Printer":
				return <Printer size="48" />;
			case "Radio":
				return <Radio size="48" />;
			case "RefreshCcw":
				return <RefreshCcw size="48" />;
			case "RefreshCw":
				return <RefreshCw size="48" />;
			case "Repeat":
				return <Repeat size="48" />;
			case "Rewind":
				return <Rewind size="48" />;
			case "RotateCcw":
				return <RotateCcw size="48" />;
			case "RotateCw":
				return <RotateCw size="48" />;
			case "Rss":
				return <Rss size="48" />;
			case "Save":
				return <Save size="48" />;
			case "Scissors":
				return <Scissors size="48" />;
			case "Search":
				return <Search size="48" />;
			case "Send":
				return <Send size="48" />;
			case "Server":
				return <Server size="48" />;
			case "Settings":
				return <Settings size="48" />;
			case "Share2":
				return <Share2 size="48" />;
			case "Share":
				return <Share size="48" />;
			case "ShieldOff":
				return <ShieldOff size="48" />;
			case "Shield":
				return <Shield size="48" />;
			case "ShoppingBag":
				return <ShoppingBag size="48" />;
			case "ShoppingCart":
				return <ShoppingCart size="48" />;
			case "Shuffle":
				return <Shuffle size="48" />;
			case "Sidebar":
				return <Sidebar size="48" />;
			case "SkipBack":
				return <SkipBack size="48" />;
			case "SkipForward":
				return <SkipForward size="48" />;
			case "Slack":
				return <Slack size="48" />;
			case "Slash":
				return <Slash size="48" />;
			case "Sliders":
				return <Sliders size="48" />;
			case "Smartphone":
				return <Smartphone size="48" />;
			case "Speaker":
				return <Speaker size="48" />;
			case "Square":
				return <Square size="48" />;
			case "Star":
				return <Star size="48" />;
			case "StopCircle":
				return <StopCircle size="48" />;
			case "Sun":
				return <Sun size="48" />;
			case "Sunrise":
				return <Sunrise size="48" />;
			case "Sunset":
				return <Sunset size="48" />;
			case "Tablet":
				return <Tablet size="48" />;
			case "Tag":
				return <Tag size="48" />;
			case "Target":
				return <Target size="48" />;
			case "Terminal":
				return <Terminal size="48" />;
			case "Thermometer":
				return <Thermometer size="48" />;
			case "ThumbsDown":
				return <ThumbsDown size="48" />;
			case "ThumbsUp":
				return <ThumbsUp size="48" />;
			case "ToggleLeft":
				return <ToggleLeft size="48" />;
			case "ToggleRight":
				return <ToggleRight size="48" />;
			case "Trash2":
				return <Trash2 size="48" />;
			case "Trash":
				return <Trash size="48" />;
			case "TrendingDown":
				return <TrendingDown size="48" />;
			case "TrendingUp":
				return <TrendingUp size="48" />;
			case "Triangle":
				return <Triangle size="48" />;
			case "Truck":
				return <Truck size="48" />;
			case "Tv":
				return <Tv size="48" />;
			case "Twitter":
				return <Twitter size="48" />;
			case "Type":
				return <Type size="48" />;
			case "Umbrella":
				return <Umbrella size="48" />;
			case "Underline":
				return <Underline size="48" />;
			case "Unlock":
				return <Unlock size="48" />;
			case "UploadCloud":
				return <UploadCloud size="48" />;
			case "Upload":
				return <Upload size="48" />;
			case "UserCheck":
				return <UserCheck size="48" />;
			case "UserMinus":
				return <UserMinus size="48" />;
			case "UserPlus":
				return <UserPlus size="48" />;
			case "UserX":
				return <UserX size="48" />;
			case "User":
				return <User size="48" />;
			case "Users":
				return <Users size="48" />;
			case "VideoOff":
				return <VideoOff size="48" />;
			case "Video":
				return <Video size="48" />;
			case "Voicemail":
				return <Voicemail size="48" />;
			case "Volume1":
				return <Volume1 size="48" />;
			case "Volume2":
				return <Volume2 size="48" />;
			case "VolumeX":
				return <VolumeX size="48" />;
			case "Volume":
				return <Volume size="48" />;
			case "Watch":
				return <Watch size="48" />;
			case "WifiOff":
				return <WifiOff size="48" />;
			case "Wifi":
				return <Wifi size="48" />;
			case "Wind":
				return <Wind size="48" />;
			case "XCircle":
				return <XCircle size="48" />;
			case "XSquare":
				return <XSquare size="48" />;
			case "X":
				return <X size="48" />;
			case "ZapOff":
				return <ZapOff size="48" />;
			case "Zap":
				return <Zap size="48" />;
			case "ZoomIn":
				return <ZoomIn size="48" />;
			case "ZoomOut":
				return <ZoomOut size="48" />;
			default:
				return <span size="48"></span>;
		}
	}

	render() {
		return(
			<div id={this.props.name.toLowerCase()} className="icon__container">
				{this.renderIcon()}
			</div>
		);
	}
}

export default Icon;