import React, { Component } from 'react'
import { Activity, Airplay, AlertCircle, AlertOctagon, AlertTriangle, AlignCenter, AlignJustify, AlignLeft, AlignRight, Anchor, Aperture, ArrowDownCircle, ArrowDownLeft, ArrowDownRight, ArrowDown, ArrowLeftCircle, ArrowLeft, ArrowRightCircle, ArrowRight, ArrowUpCircle, ArrowUpLeft, ArrowUpRight, ArrowUp, AtSign, Award, BarChart2, BarChart, BatteryCharging, Battery, BellOff, Bell, Bluetooth, Bold, BookOpen, Book, Bookmark, Box, Briefcase, Calendar, CameraOff, Camera, Cast, CheckCircle, CheckSquare, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsLeft, ChevronsRight, ChevronsUp, Chrome, Circle, Clipboard, Clock, CloudDrizzle, CloudLightning, CloudOff, CloudRain, CloudSnow, Cloud, Code, Codepen, Command, Compass, Copy, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreditCard, Crop, Crosshair, Database, Delete, Disc, DollarSign, DownloadCloud, Download, Droplet, Edit2, Edit3, Edit, ExternalLink, EyeOff, Eye, Facebook, FastForward, Feather, FileMinus, FilePlus, FileText, File, Film, Filter, Flag, FolderMinus, FolderPlus, Folder, GitBranch, GitCommit, GitMerge, GitPullRequest, Github, Gitlab, Globe, Grid, HardDrive, Hash, Headphones, Heart, HelpCircle, Home, Image, Inbox, Info, Instagram, Italic, Layers, Layout, LifeBuoy, Link2, Link, Linkedin, List, Loader, Lock, LogIn, LogOut, Mail, MapPin, Map, Maximize2, Maximize, Menu, MessageCircle, MessageSquare, MicOff, Mic, Minimize2, Minimize, MinusCircle, MinusSquare, Minus, Monitor, Moon, MoreHorizontal, MoreVertical, Move, Music, Navigation2, Navigation, Octagon, Package, Paperclip, PauseCircle, Pause, Percent, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Phone, PieChart, PlayCircle, Play, PlusCircle, PlusSquare, Plus, Pocket, Power, Printer, Radio, RefreshCcw, RefreshCw, Repeat, Rewind, RotateCcw, RotateCw, Rss, Save, Scissors, Search, Send, Server, Settings, Share2, Share, ShieldOff, Shield, ShoppingBag, ShoppingCart, Shuffle, Sidebar, SkipBack, SkipForward, Slack, Slash, Sliders, Smartphone, Speaker, Square, Star, StopCircle, Sun, Sunrise, Sunset, Tablet, Tag, Target, Terminal, Thermometer, ThumbsDown, ThumbsUp, ToggleLeft, ToggleRight, Trash2, Trash, TrendingDown, TrendingUp, Triangle, Truck, Tv, Twitter, Type, Umbrella, Underline, Unlock, UploadCloud, Upload, UserCheck, UserMinus, UserPlus, UserX, User, Users, VideoOff, Video, Voicemail, Volume1, Volume2, VolumeX, Volume, Watch, WifiOff, Wifi, Wind, XCircle, XSquare, X, ZapOff, Zap, ZoomIn, ZoomOut } from 'react-feather';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.iconClassName = this.formatIconNameToCssClass(this.props.name);
  }
  formatIconNameToCssClass(string) {
    return string.replace(/([A-Z])/g, "-$1").slice(1).toLowerCase();
  }

	renderIcon() {

    let classList = "feather feather-"+this.iconClassName;
		switch (this.props.name) {
			case "Activity":
				return <Activity size={this.props.size} className={classList} />;
			case "Airplay":
				return <Airplay size={this.props.size} className={classList} />;
			case "AlertCircle":
				return <AlertCircle size={this.props.size} className={classList} />;
			case "AlertOctagon":
				return <AlertOctagon size={this.props.size} className={classList} />;
			case "AlertTriangle":
				return <AlertTriangle size={this.props.size} className={classList} />;
			case "AlignCenter":
				return <AlignCenter size={this.props.size} className={classList} />;
			case "AlignJustify":
				return <AlignJustify size={this.props.size} className={classList} />;
			case "AlignLeft":
				return <AlignLeft size={this.props.size} className={classList} />;
			case "AlignRight":
				return <AlignRight size={this.props.size} className={classList} />;
			case "Anchor":
				return <Anchor size={this.props.size} className={classList} />;
			case "Aperture":
				return <Aperture size={this.props.size} className={classList} />;
			case "ArrowDownCircle":
				return <ArrowDownCircle size={this.props.size} className={classList} />;
			case "ArrowDownLeft":
				return <ArrowDownLeft size={this.props.size} className={classList} />;
			case "ArrowDownRight":
				return <ArrowDownRight size={this.props.size} className={classList} />;
			case "ArrowDown":
				return <ArrowDown size={this.props.size} className={classList} />;
			case "ArrowLeftCircle":
				return <ArrowLeftCircle size={this.props.size} className={classList} />;
			case "ArrowLeft":
				return <ArrowLeft size={this.props.size} className={classList} />;
			case "ArrowRightCircle":
				return <ArrowRightCircle size={this.props.size} className={classList} />;
			case "ArrowRight":
				return <ArrowRight size={this.props.size} className={classList} />;
			case "ArrowUpCircle":
				return <ArrowUpCircle size={this.props.size} className={classList} />;
			case "ArrowUpLeft":
				return <ArrowUpLeft size={this.props.size} className={classList} />;
			case "ArrowUpRight":
				return <ArrowUpRight size={this.props.size} className={classList} />;
			case "ArrowUp":
				return <ArrowUp size={this.props.size} className={classList} />;
			case "AtSign":
				return <AtSign size={this.props.size} className={classList} />;
			case "Award":
				return <Award size={this.props.size} className={classList} />;
			case "BarChart2":
				return <BarChart2 size={this.props.size} className={classList} />;
			case "BarChart":
				return <BarChart size={this.props.size} className={classList} />;
			case "BatteryCharging":
				return <BatteryCharging size={this.props.size} className={classList} />;
			case "Battery":
				return <Battery size={this.props.size} className={classList} />;
			case "BellOff":
				return <BellOff size={this.props.size} className={classList} />;
			case "Bell":
				return <Bell size={this.props.size} className={classList} />;
			case "Bluetooth":
				return <Bluetooth size={this.props.size} className={classList} />;
			case "Bold":
				return <Bold size={this.props.size} className={classList} />;
			case "BookOpen":
				return <BookOpen size={this.props.size} className={classList} />;
			case "Book":
				return <Book size={this.props.size} className={classList} />;
			case "Bookmark":
				return <Bookmark size={this.props.size} className={classList} />;
			case "Box":
				return <Box size={this.props.size} className={classList} />;
			case "Briefcase":
				return <Briefcase size={this.props.size} className={classList} />;
			case "Calendar":
				return <Calendar size={this.props.size} className={classList} />;
			case "CameraOff":
				return <CameraOff size={this.props.size} className={classList} />;
			case "Camera":
				return <Camera size={this.props.size} className={classList} />;
			case "Cast":
				return <Cast size={this.props.size} className={classList} />;
			case "CheckCircle":
				return <CheckCircle size={this.props.size} className={classList} />;
			case "CheckSquare":
				return <CheckSquare size={this.props.size} className={classList} />;
			case "Check":
				return <Check size={this.props.size} className={classList} />;
			case "ChevronDown":
				return <ChevronDown size={this.props.size} className={classList} />;
			case "ChevronLeft":
				return <ChevronLeft size={this.props.size} className={classList} />;
			case "ChevronRight":
				return <ChevronRight size={this.props.size} className={classList} />;
			case "ChevronUp":
				return <ChevronUp size={this.props.size} className={classList} />;
			case "ChevronsDown":
				return <ChevronsDown size={this.props.size} className={classList} />;
			case "ChevronsLeft":
				return <ChevronsLeft size={this.props.size} className={classList} />;
			case "ChevronsRight":
				return <ChevronsRight size={this.props.size} className={classList} />;
			case "ChevronsUp":
				return <ChevronsUp size={this.props.size} className={classList} />;
			case "Chrome":
				return <Chrome size={this.props.size} className={classList} />;
			case "Circle":
				return <Circle size={this.props.size} className={classList} />;
			case "Clipboard":
				return <Clipboard size={this.props.size} className={classList} />;
			case "Clock":
				return <Clock size={this.props.size} className={classList} />;
			case "CloudDrizzle":
				return <CloudDrizzle size={this.props.size} className={classList} />;
			case "CloudLightning":
				return <CloudLightning size={this.props.size} className={classList} />;
			case "CloudOff":
				return <CloudOff size={this.props.size} className={classList} />;
			case "CloudRain":
				return <CloudRain size={this.props.size} className={classList} />;
			case "CloudSnow":
				return <CloudSnow size={this.props.size} className={classList} />;
			case "Cloud":
				return <Cloud size={this.props.size} className={classList} />;
			case "Code":
				return <Code size={this.props.size} className={classList} />;
			case "Codepen":
				return <Codepen size={this.props.size} className={classList} />;
			case "Command":
				return <Command size={this.props.size} className={classList} />;
			case "Compass":
				return <Compass size={this.props.size} className={classList} />;
			case "Copy":
				return <Copy size={this.props.size} className={classList} />;
			case "CornerDownLeft":
				return <CornerDownLeft size={this.props.size} className={classList} />;
			case "CornerDownRight":
				return <CornerDownRight size={this.props.size} className={classList} />;
			case "CornerLeftDown":
				return <CornerLeftDown size={this.props.size} className={classList} />;
			case "CornerLeftUp":
				return <CornerLeftUp size={this.props.size} className={classList} />;
			case "CornerRightDown":
				return <CornerRightDown size={this.props.size} className={classList} />;
			case "CornerRightUp":
				return <CornerRightUp size={this.props.size} className={classList} />;
			case "CornerUpLeft":
				return <CornerUpLeft size={this.props.size} className={classList} />;
			case "CornerUpRight":
				return <CornerUpRight size={this.props.size} className={classList} />;
			case "Cpu":
				return <Cpu size={this.props.size} className={classList} />;
			case "CreditCard":
				return <CreditCard size={this.props.size} className={classList} />;
			case "Crop":
				return <Crop size={this.props.size} className={classList} />;
			case "Crosshair":
				return <Crosshair size={this.props.size} className={classList} />;
			case "Database":
				return <Database size={this.props.size} className={classList} />;
			case "Delete":
				return <Delete size={this.props.size} className={classList} />;
			case "Disc":
				return <Disc size={this.props.size} className={classList} />;
			case "DollarSign":
				return <DollarSign size={this.props.size} className={classList} />;
			case "DownloadCloud":
				return <DownloadCloud size={this.props.size} className={classList} />;
			case "Download":
				return <Download size={this.props.size} className={classList} />;
			case "Droplet":
				return <Droplet size={this.props.size} className={classList} />;
			case "Edit2":
				return <Edit2 size={this.props.size} className={classList} />;
			case "Edit3":
				return <Edit3 size={this.props.size} className={classList} />;
			case "Edit":
				return <Edit size={this.props.size} className={classList} />;
			case "ExternalLink":
				return <ExternalLink size={this.props.size} className={classList} />;
			case "EyeOff":
				return <EyeOff size={this.props.size} className={classList} />;
			case "Eye":
				return <Eye size={this.props.size} className={classList} />;
			case "Facebook":
				return <Facebook size={this.props.size} className={classList} />;
			case "FastForward":
				return <FastForward size={this.props.size} className={classList} />;
			case "Feather":
				return <Feather size={this.props.size} className={classList} />;
			case "FileMinus":
				return <FileMinus size={this.props.size} className={classList} />;
			case "FilePlus":
				return <FilePlus size={this.props.size} className={classList} />;
			case "FileText":
				return <FileText size={this.props.size} className={classList} />;
			case "File":
				return <File size={this.props.size} className={classList} />;
			case "Film":
				return <Film size={this.props.size} className={classList} />;
			case "Filter":
				return <Filter size={this.props.size} className={classList} />;
			case "Flag":
				return <Flag size={this.props.size} className={classList} />;
			case "FolderMinus":
				return <FolderMinus size={this.props.size} className={classList} />;
			case "FolderPlus":
				return <FolderPlus size={this.props.size} className={classList} />;
			case "Folder":
				return <Folder size={this.props.size} className={classList} />;
			case "GitBranch":
				return <GitBranch size={this.props.size} className={classList} />;
			case "GitCommit":
				return <GitCommit size={this.props.size} className={classList} />;
			case "GitMerge":
				return <GitMerge size={this.props.size} className={classList} />;
			case "GitPullRequest":
				return <GitPullRequest size={this.props.size} className={classList} />;
			case "Github":
				return <Github size={this.props.size} className={classList} />;
			case "Gitlab":
				return <Gitlab size={this.props.size} className={classList} />;
			case "Globe":
				return <Globe size={this.props.size} className={classList} />;
			case "Grid":
				return <Grid size={this.props.size} className={classList} />;
			case "HardDrive":
				return <HardDrive size={this.props.size} className={classList} />;
			case "Hash":
				return <Hash size={this.props.size} className={classList} />;
			case "Headphones":
				return <Headphones size={this.props.size} className={classList} />;
			case "Heart":
				return <Heart size={this.props.size} className={classList} />;
			case "HelpCircle":
				return <HelpCircle size={this.props.size} className={classList} />;
			case "Home":
				return <Home size={this.props.size} className={classList} />;
			case "Image":
				return <Image size={this.props.size} className={classList} />;
			case "Inbox":
				return <Inbox size={this.props.size} className={classList} />;
			case "Info":
				return <Info size={this.props.size} className={classList} />;
			case "Instagram":
				return <Instagram size={this.props.size} className={classList} />;
			case "Italic":
				return <Italic size={this.props.size} className={classList} />;
			case "Layers":
				return <Layers size={this.props.size} className={classList} />;
			case "Layout":
				return <Layout size={this.props.size} className={classList} />;
			case "LifeBuoy":
				return <LifeBuoy size={this.props.size} className={classList} />;
			case "Link2":
				return <Link2 size={this.props.size} className={classList} />;
			case "Link":
				return <Link size={this.props.size} className={classList} />;
			case "Linkedin":
				return <Linkedin size={this.props.size} className={classList} />;
			case "List":
				return <List size={this.props.size} className={classList} />;
			case "Loader":
				return <Loader size={this.props.size} className={classList} />;
			case "Lock":
				return <Lock size={this.props.size} className={classList} />;
			case "LogIn":
				return <LogIn size={this.props.size} className={classList} />;
			case "LogOut":
				return <LogOut size={this.props.size} className={classList} />;
			case "Mail":
				return <Mail size={this.props.size} className={classList} />;
			case "MapPin":
				return <MapPin size={this.props.size} className={classList} />;
			case "Map":
				return <Map size={this.props.size} className={classList} />;
			case "Maximize2":
				return <Maximize2 size={this.props.size} className={classList} />;
			case "Maximize":
				return <Maximize size={this.props.size} className={classList} />;
			case "Menu":
				return <Menu size={this.props.size} className={classList} />;
			case "MessageCircle":
				return <MessageCircle size={this.props.size} className={classList} />;
			case "MessageSquare":
				return <MessageSquare size={this.props.size} className={classList} />;
			case "MicOff":
				return <MicOff size={this.props.size} className={classList} />;
			case "Mic":
				return <Mic size={this.props.size} className={classList} />;
			case "Minimize2":
				return <Minimize2 size={this.props.size} className={classList} />;
			case "Minimize":
				return <Minimize size={this.props.size} className={classList} />;
			case "MinusCircle":
				return <MinusCircle size={this.props.size} className={classList} />;
			case "MinusSquare":
				return <MinusSquare size={this.props.size} className={classList} />;
			case "Minus":
				return <Minus size={this.props.size} className={classList} />;
			case "Monitor":
				return <Monitor size={this.props.size} className={classList} />;
			case "Moon":
				return <Moon size={this.props.size} className={classList} />;
			case "MoreHorizontal":
				return <MoreHorizontal size={this.props.size} className={classList} />;
			case "MoreVertical":
				return <MoreVertical size={this.props.size} className={classList} />;
			case "Move":
				return <Move size={this.props.size} className={classList} />;
			case "Music":
				return <Music size={this.props.size} className={classList} />;
			case "Navigation2":
				return <Navigation2 size={this.props.size} className={classList} />;
			case "Navigation":
				return <Navigation size={this.props.size} className={classList} />;
			case "Octagon":
				return <Octagon size={this.props.size} className={classList} />;
			case "Package":
				return <Package size={this.props.size} className={classList} />;
			case "Paperclip":
				return <Paperclip size={this.props.size} className={classList} />;
			case "PauseCircle":
				return <PauseCircle size={this.props.size} className={classList} />;
			case "Pause":
				return <Pause size={this.props.size} className={classList} />;
			case "Percent":
				return <Percent size={this.props.size} className={classList} />;
			case "PhoneCall":
				return <PhoneCall size={this.props.size} className={classList} />;
			case "PhoneForwarded":
				return <PhoneForwarded size={this.props.size} className={classList} />;
			case "PhoneIncoming":
				return <PhoneIncoming size={this.props.size} className={classList} />;
			case "PhoneMissed":
				return <PhoneMissed size={this.props.size} className={classList} />;
			case "PhoneOff":
				return <PhoneOff size={this.props.size} className={classList} />;
			case "PhoneOutgoing":
				return <PhoneOutgoing size={this.props.size} className={classList} />;
			case "Phone":
				return <Phone size={this.props.size} className={classList} />;
			case "PieChart":
				return <PieChart size={this.props.size} className={classList} />;
			case "PlayCircle":
				return <PlayCircle size={this.props.size} className={classList} />;
			case "Play":
				return <Play size={this.props.size} className={classList} />;
			case "PlusCircle":
				return <PlusCircle size={this.props.size} className={classList} />;
			case "PlusSquare":
				return <PlusSquare size={this.props.size} className={classList} />;
			case "Plus":
				return <Plus size={this.props.size} className={classList} />;
			case "Pocket":
				return <Pocket size={this.props.size} className={classList} />;
			case "Power":
				return <Power size={this.props.size} className={classList} />;
			case "Printer":
				return <Printer size={this.props.size} className={classList} />;
			case "Radio":
				return <Radio size={this.props.size} className={classList} />;
			case "RefreshCcw":
				return <RefreshCcw size={this.props.size} className={classList} />;
			case "RefreshCw":
				return <RefreshCw size={this.props.size} className={classList} />;
			case "Repeat":
				return <Repeat size={this.props.size} className={classList} />;
			case "Rewind":
				return <Rewind size={this.props.size} className={classList} />;
			case "RotateCcw":
				return <RotateCcw size={this.props.size} className={classList} />;
			case "RotateCw":
				return <RotateCw size={this.props.size} className={classList} />;
			case "Rss":
				return <Rss size={this.props.size} className={classList} />;
			case "Save":
				return <Save size={this.props.size} className={classList} />;
			case "Scissors":
				return <Scissors size={this.props.size} className={classList} />;
			case "Search":
				return <Search size={this.props.size} className={classList} />;
			case "Send":
				return <Send size={this.props.size} className={classList} />;
			case "Server":
				return <Server size={this.props.size} className={classList} />;
			case "Settings":
				return <Settings size={this.props.size} className={classList} />;
			case "Share2":
				return <Share2 size={this.props.size} className={classList} />;
			case "Share":
				return <Share size={this.props.size} className={classList} />;
			case "ShieldOff":
				return <ShieldOff size={this.props.size} className={classList} />;
			case "Shield":
				return <Shield size={this.props.size} className={classList} />;
			case "ShoppingBag":
				return <ShoppingBag size={this.props.size} className={classList} />;
			case "ShoppingCart":
				return <ShoppingCart size={this.props.size} className={classList} />;
			case "Shuffle":
				return <Shuffle size={this.props.size} className={classList} />;
			case "Sidebar":
				return <Sidebar size={this.props.size} className={classList} />;
			case "SkipBack":
				return <SkipBack size={this.props.size} className={classList} />;
			case "SkipForward":
				return <SkipForward size={this.props.size} className={classList} />;
			case "Slack":
				return <Slack size={this.props.size} className={classList} />;
			case "Slash":
				return <Slash size={this.props.size} className={classList} />;
			case "Sliders":
				return <Sliders size={this.props.size} className={classList} />;
			case "Smartphone":
				return <Smartphone size={this.props.size} className={classList} />;
			case "Speaker":
				return <Speaker size={this.props.size} className={classList} />;
			case "Square":
				return <Square size={this.props.size} className={classList} />;
			case "Star":
				return <Star size={this.props.size} className={classList} />;
			case "StopCircle":
				return <StopCircle size={this.props.size} className={classList} />;
			case "Sun":
				return <Sun size={this.props.size} className={classList} />;
			case "Sunrise":
				return <Sunrise size={this.props.size} className={classList} />;
			case "Sunset":
				return <Sunset size={this.props.size} className={classList} />;
			case "Tablet":
				return <Tablet size={this.props.size} className={classList} />;
			case "Tag":
				return <Tag size={this.props.size} className={classList} />;
			case "Target":
				return <Target size={this.props.size} className={classList} />;
			case "Terminal":
				return <Terminal size={this.props.size} className={classList} />;
			case "Thermometer":
				return <Thermometer size={this.props.size} className={classList} />;
			case "ThumbsDown":
				return <ThumbsDown size={this.props.size} className={classList} />;
			case "ThumbsUp":
				return <ThumbsUp size={this.props.size} className={classList} />;
			case "ToggleLeft":
				return <ToggleLeft size={this.props.size} className={classList} />;
			case "ToggleRight":
				return <ToggleRight size={this.props.size} className={classList} />;
			case "Trash2":
				return <Trash2 size={this.props.size} className={classList} />;
			case "Trash":
				return <Trash size={this.props.size} className={classList} />;
			case "TrendingDown":
				return <TrendingDown size={this.props.size} className={classList} />;
			case "TrendingUp":
				return <TrendingUp size={this.props.size} className={classList} />;
			case "Triangle":
				return <Triangle size={this.props.size} className={classList} />;
			case "Truck":
				return <Truck size={this.props.size} className={classList} />;
			case "Tv":
				return <Tv size={this.props.size} className={classList} />;
			case "Twitter":
				return <Twitter size={this.props.size} className={classList} />;
			case "Type":
				return <Type size={this.props.size} className={classList} />;
			case "Umbrella":
				return <Umbrella size={this.props.size} className={classList} />;
			case "Underline":
				return <Underline size={this.props.size} className={classList} />;
			case "Unlock":
				return <Unlock size={this.props.size} className={classList} />;
			case "UploadCloud":
				return <UploadCloud size={this.props.size} className={classList} />;
			case "Upload":
				return <Upload size={this.props.size} className={classList} />;
			case "UserCheck":
				return <UserCheck size={this.props.size} className={classList} />;
			case "UserMinus":
				return <UserMinus size={this.props.size} className={classList} />;
			case "UserPlus":
				return <UserPlus size={this.props.size} className={classList} />;
			case "UserX":
				return <UserX size={this.props.size} className={classList} />;
			case "User":
				return <User size={this.props.size} className={classList} />;
			case "Users":
				return <Users size={this.props.size} className={classList} />;
			case "VideoOff":
				return <VideoOff size={this.props.size} className={classList} />;
			case "Video":
				return <Video size={this.props.size} className={classList} />;
			case "Voicemail":
				return <Voicemail size={this.props.size} className={classList} />;
			case "Volume1":
				return <Volume1 size={this.props.size} className={classList} />;
			case "Volume2":
				return <Volume2 size={this.props.size} className={classList} />;
			case "VolumeX":
				return <VolumeX size={this.props.size} className={classList} />;
			case "Volume":
				return <Volume size={this.props.size} className={classList} />;
			case "Watch":
				return <Watch size={this.props.size} className={classList} />;
			case "WifiOff":
				return <WifiOff size={this.props.size} className={classList} />;
			case "Wifi":
				return <Wifi size={this.props.size} className={classList} />;
			case "Wind":
				return <Wind size={this.props.size} className={classList} />;
			case "XCircle":
				return <XCircle size={this.props.size} className={classList} />;
			case "XSquare":
				return <XSquare size={this.props.size} className={classList} />;
			case "X":
				return <X size={this.props.size} className={classList} />;
			case "ZapOff":
				return <ZapOff size={this.props.size} className={classList} />;
			case "Zap":
				return <Zap size={this.props.size} className={classList} />;
			case "ZoomIn":
				return <ZoomIn size={this.props.size} className={classList} />;
			case "ZoomOut":
				return <ZoomOut size={this.props.size} className={classList} />;
			default:
				return <span></span>;
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